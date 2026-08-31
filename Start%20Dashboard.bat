@echo off
title PPP 2027 Review Control Center
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0dashboard-server.ps1"
