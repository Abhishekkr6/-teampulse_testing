$logRoot = Join-Path $PSScriptRoot "../logs"
if (-not (Test-Path $logRoot)) {
    Write-Host "No logs directory found." -ForegroundColor Yellow
    exit 0
}

$removed = 0
Get-ChildItem -Path $logRoot -Filter "*.txt" -Recurse | ForEach-Object {
    if ($_.LastWriteTime -lt (Get-Date).AddDays(-3)) {
        Remove-Item $_.FullName -Force
        $removed += 1
    }
}

Write-Host "Cleaned" $removed "old log files." -ForegroundColor Green
