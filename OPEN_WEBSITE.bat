@echo off
REM Carla's Website Launcher - Double-click to open in Chrome (NEVER Edge)
set "CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
if exist "%CHROME_PATH%" (
    start "" "%CHROME_PATH%" "http://localhost:5173"
) else (
    set "CHROME_PATH=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"
    if exist "%CHROME_PATH%" (
        start "" "%CHROME_PATH%" "http://localhost:5173"
    ) else (
        echo Chrome not found. Please install Google Chrome.
        pause
    )
)

