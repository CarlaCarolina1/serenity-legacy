# Start Carla's Website Dev Server
# Double-click this file to start the development server

$frontendPath = "C:\Users\Yacaman.LEX\Desktop\Carlas Website\frontend"

Write-Host "Starting Carla's Website Development Server..." -ForegroundColor Cyan
Write-Host ""

# Check if frontend folder exists
if (-not (Test-Path $frontendPath)) {
    Write-Host "Error: Frontend folder not found at:" -ForegroundColor Red
    Write-Host $frontendPath -ForegroundColor Red
    Write-Host ""
    Write-Host "Press any key to exit..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit
}

# Change to frontend directory
Set-Location $frontendPath

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies first..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Start the dev server
Write-Host "Starting Vite dev server..." -ForegroundColor Green
Write-Host "The website will be available at: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev
