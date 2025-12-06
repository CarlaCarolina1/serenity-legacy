# Carla's Website Launcher
# CRITICAL: ALWAYS use Google Chrome - NEVER Microsoft Edge

$url = "http://localhost:5173"
$chromePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "${env:LOCALAPPDATA}\Google\Chrome\Application\chrome.exe",
    "${env:PROGRAMFILES}\Google\Chrome\Application\chrome.exe",
    "${env:PROGRAMFILES(X86)}\Google\Chrome\Application\chrome.exe"
)

# Find and use Chrome - NEVER use default browser (might be Edge)
$found = $false
foreach ($path in $chromePaths) {
    if (Test-Path $path) {
        Start-Process $path -ArgumentList $url
        Write-Host "Opening website in Google Chrome..." -ForegroundColor Green
        $found = $true
        break
    }
}

if (-not $found) {
    Write-Host "ERROR: Google Chrome not found!" -ForegroundColor Red
    Write-Host "Please install Google Chrome. We cannot use Microsoft Edge." -ForegroundColor Red
    Write-Host "Download from: https://www.google.com/chrome/" -ForegroundColor Yellow
    Start-Sleep -Seconds 5
    exit 1
}

