$words = @("alpha", "bravo", "charlie", "delta", "echo")
$shuffle = Get-Random -InputObject $words -Count $words.Count

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$logPath = Join-Path $PSScriptRoot "../logs/random-$timestamp.txt"

if (-not (Test-Path (Split-Path $logPath -Parent))) {
    New-Item -Path (Split-Path $logPath -Parent) -ItemType Directory | Out-Null
}

"Random order: $($shuffle -join ', ')" | Out-File -FilePath $logPath -Encoding UTF8
Write-Host "Generated" $logPath
