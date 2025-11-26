Write-Host "Starting Day3 simulation..." -ForegroundColor Cyan
Start-Sleep -Seconds 1

$results = 1..5 | ForEach-Object {
    [pscustomobject]@{
        Scenario = "case$_"
        Outcome  = (Get-Random -InputObject @("pass", "flaky", "timeout"))
    }
}

$results | Format-Table -AutoSize
Write-Host "Day3 simulation finished." -ForegroundColor Green
