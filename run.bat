@echo off
echo ==============================================
echo   ApexPath - DSA Study Planner Launcher
echo ==============================================
echo.

set PATH=C:\Program Files\nodejs;%PATH%

echo [1/2] Starting Backend Server on http://localhost:3001 ...
start "ApexPath Backend" cmd /k "cd /d %~dp0 && node server.js"

echo [2/2] Starting Frontend UI on http://localhost:5173 ...
start "ApexPath Frontend" cmd /k "cd /d %~dp0client && npm run dev"

echo.
echo Both servers started!
echo Open your browser at: http://localhost:5173
echo.
pause
