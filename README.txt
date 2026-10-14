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
- Keep the exact workflow column names for retained stages; removed columns are supported.
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

OCTOBER 13, 2026 — UPDATED WORKBOOK STRUCTURE
- 57 projects; 20 workflow milestone columns across five review phases.
- Final Reviews now shows four columns: Submittal to SB for CCD,
  Requested Title Sheet, Received Signed Plans, and Sent to CCD.
- Deleted milestone columns no longer prevent live Excel loading.
- Stages are drawn from columns present in PPP Projects; Stage Reference
  supplies their phase and order when available. Reference entries for
  deleted columns are ignored (including the old CCD Corrections next step).
- Keep workflow header spelling consistent. Add new stages to both
  PPP Projects and Stage Reference. Empty phases are hidden automatically.
- The direct-open embedded snapshot has been refreshed from this workbook.
- Project cards show workbook notes, including pending signatures.
- Invalid date text is flagged and excluded from current-stage calculations.
  Example: A10059 / Requested Title Sheet contains 9/112026.
  Original Excel data has been retained for you to correct.
- Chronological conflicts remain visible. The latest valid milestone date
  determines current stage; same-day ties use the furthest workflow stage.
- Needs Attention remains 7+ days at the current stage or a workbook date issue.
- Upcoming submissions are sorted by Due to PM; letting filters are retained.

Run Start Dashboard.bat for live updates. Direct-open mode uses the snapshot.

COMPLETION RULE
- A valid Sent to CCD milestone ends tracking, even if another milestone has
  a later or conflicting date. Historical dates remain visible in details.
- Completed projects remain in Final Reviews / Sent to CCD with a green DONE badge.
- Completed projects are excluded from active reviews and Needs Attention.
- Their waiting counter stops and their detail drawer says no follow-up is required.
- The Completed summary card is separate from Active reviews and Upcoming.
