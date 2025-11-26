$path = Join-Path $PSScriptRoot "../data/mockdata.json"
if (-not (Test-Path $path)) {
    Write-Host "No data file found." -ForegroundColor Red
    exit 1
}

$json = Get-Content $path | ConvertFrom-Json
$mean = ($json | Measure-Object score -Average).Average
$max = ($json | Sort-Object score -Descending | Select-Object -First 1)

Write-Host "Entries:" $json.Count
Write-Host "Mean score:" ([math]::Round($mean, 2))
Write-Host "Top candidate:" $max.name "with" $max.score
