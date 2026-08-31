param(
  [int]$Port = 8766
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$WorkbookRelative = "data\PPP-2027-Review-Tracking.xlsx"
$WorkbookPath = Join-Path $Root $WorkbookRelative

function Write-HttpResponse {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType = "text/plain; charset=utf-8"
  )

  $header = "HTTP/1.1 $StatusCode $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nCache-Control: no-store, no-cache, must-revalidate`r`nPragma: no-cache`r`nConnection: close`r`n`r`n"
  $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) {
    $Stream.Write($Body, 0, $Body.Length)
  }
  $Stream.Flush()
}

function Text-Bytes {
  param([string]$Text)
  return [Text.Encoding]::UTF8.GetBytes($Text)
}

function Serve-Client {
  param([System.Net.Sockets.TcpClient]$Client)

  $stream = $Client.GetStream()
  $reader = New-Object IO.StreamReader($stream, [Text.Encoding]::ASCII, $false, 4096, $true)

  try {
    $requestLine = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($requestLine)) { return }

    while ($true) {
      $line = $reader.ReadLine()
      if ($null -eq $line -or $line -eq "") { break }
    }

    $parts = $requestLine.Split(" ")
    if ($parts.Count -lt 2 -or $parts[0] -ne "GET") {
      Write-HttpResponse $stream 405 "Method Not Allowed" (Text-Bytes "GET only")
      return
    }

    $target = $parts[1]
    $path = ($target -split "\?")[0]
    $path = [Uri]::UnescapeDataString($path)

    if ($path -eq "/favicon.ico") {
      Write-HttpResponse $stream 204 "No Content" ([byte[]]@()) "image/x-icon"
      return
    }

    $mapping = @{
      "/" = "index.html"
      "/index.html" = "index.html"
      "/script.js" = "script.js"
      "/styles.css" = "styles.css"
      "/data/PPP-2027-Review-Tracking.xlsx" = $WorkbookRelative
    }

    if (-not $mapping.ContainsKey($path)) {
      Write-HttpResponse $stream 404 "Not Found" (Text-Bytes "Not found")
      return
    }

    $relative = $mapping[$path]
    $filePath = Join-Path $Root $relative
    if (-not (Test-Path $filePath)) {
      Write-HttpResponse $stream 404 "Not Found" (Text-Bytes "Not found")
      return
    }

    $extension = [IO.Path]::GetExtension($filePath).ToLowerInvariant()
    $mime = switch ($extension) {
      ".html" { "text/html; charset=utf-8" }
      ".js" { "text/javascript; charset=utf-8" }
      ".css" { "text/css; charset=utf-8" }
      ".xlsx" { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
      default { "application/octet-stream" }
    }

    $bytes = [IO.File]::ReadAllBytes($filePath)
    Write-HttpResponse $stream 200 "OK" $bytes $mime
  }
  catch {
    try {
      Write-HttpResponse $stream 500 "Internal Server Error" (Text-Bytes $_.Exception.Message)
    } catch {}
  }
  finally {
    $reader.Dispose()
    $stream.Dispose()
    $Client.Close()
  }
}

if (-not (Test-Path $WorkbookPath)) {
  Write-Host ""
  Write-Host "Workbook not found:" -ForegroundColor Red
  Write-Host "  $WorkbookPath"
  Write-Host ""
  Write-Host "Place the PPP workbook in the data folder and run this again."
  Read-Host "Press Enter to close"
  exit 1
}

$listener = [System.Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $Port)
try {
  $listener.Start()
}
catch {
  Write-Host "Could not start the dashboard on port $Port." -ForegroundColor Red
  Write-Host $_.Exception.Message
  Write-Host ""
  Write-Host "If the dashboard is already running, open http://127.0.0.1:$Port/ in your browser."
  Read-Host "Press Enter to close"
  exit 1
}

$url = "http://127.0.0.1:$Port/"
Write-Host ""
Write-Host "PPP 2027 Review Control Center" -ForegroundColor Cyan
Write-Host "--------------------------------"
Write-Host "Dashboard: $url"
Write-Host "Excel data: $WorkbookPath"
Write-Host ""
Write-Host "Keep this window open while using the dashboard." -ForegroundColor Yellow
Write-Host "Save the Excel workbook after edits; the webpage checks the file every 4 seconds."
Write-Host "No Excel macro, Python, framework, or external library is required."
Write-Host "Press Ctrl+C to stop."
Write-Host ""

Start-Process $url

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    Serve-Client $client
  }
}
finally {
  $listener.Stop()
}
