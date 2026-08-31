PPP 2027 REVIEW CONTROL CENTER — EXCEL-LINKED MODE

NORMAL USE
1. Double-click: Start Dashboard.bat
2. Keep the PowerShell window open.
3. Edit this workbook:
      data\PPP-2027-Review-Tracking.xlsx
4. Save the workbook.
5. The dashboard checks the workbook every 4 seconds and refreshes automatically after a saved change.

HOW IT WORKS
- The Excel workbook in the data folder is the live data source.
- script.js reads the .xlsx file directly in the browser; no external JavaScript library is used.
- The small PowerShell helper only serves the local files so the browser is allowed to read the workbook.
- No Excel macro, Python installation, framework, or internet connection is required.

WORKBOOK RULES
- Keep the worksheet name exactly: PPP Projects
- Keep the exact workflow column names.
- You may add/update project rows and milestone dates.
- Current stage is determined from the latest populated milestone date.
- If multiple milestones share the latest date, the furthest workflow stage on that date is used.
- Chronological date conflicts are flagged in the dashboard instead of being hidden.

FALLBACK MODE
- You can still double-click index.html directly.
- Direct-open mode uses the embedded workbook snapshot because browsers block direct access to nearby local files.
- Direct-open mode therefore does NOT pick up later Excel edits.
- For automatic Excel updates, always use Start Dashboard.bat.

PUBLISHING NOTE
- When hosted on a normal web server, the dashboard also reads data/PPP-2027-Review-Tracking.xlsx directly.
- Updating the workbook on the hosted site updates what the dashboard reads; your hosting platform still needs the changed workbook to be uploaded/deployed.

READABILITY / LAYOUT UPDATE
- Program Overview now uses five compact phase summary cards instead of repeating all 27 workflow stage names at once.
- Exact workflow stage names remain visible in the selected phase board.
- Project cards use larger text, stronger waiting indicators, and more spacing.
- The selected phase board has more vertical room while preserving internal scrolling for long stage queues.
- Needs Attention chips open the project detail drawer directly.


DUE TO PM UPDATE (FULL PACKAGE)
- Only the lower Upcoming submissions & lettings workload calculation is driven by Due to PM.
- Next 60 days and Next 120 days use the Due to PM column.
- The upcoming drawer is sorted by Due to PM and shows both PM due date and letting date.
- The main dashboard Letting Date filter remains unchanged.
- This package uses local port 8766 so an older dashboard still running on port 8765 will not be opened by mistake.
- With the included 2026-08-31 workbook snapshot, expected lower-strip values are: Next Due to PM Oct 26, 2026; 13 due within 60 days; 24 due within 120 days; 37 PM due dates ahead.
