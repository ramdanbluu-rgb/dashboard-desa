# ============================================================================
# Dashboard Desa - Automated Backup Script
# ============================================================================
# Purpose: Backup project files to local .backup folder with timestamped ZIP
# Usage: .\scripts\backup.ps1
# ============================================================================

# Get current directory
$projectRoot = Split-Path -Parent $PSScriptRoot
$backupDir = Join-Path $projectRoot ".backup"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFileName = "backup-$timestamp.zip"
$backupPath = Join-Path $backupDir $backupFileName

# Create backup folder if it doesn't exist
if (-not (Test-Path $backupDir)) {
    Write-Host "📁 Creating backup directory: $backupDir" -ForegroundColor Green
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

# Define files and folders to backup
$itemsToBackup = @(
    "docs/PROJECT_PROGRESS.md",
    "src/",
    "public/",
    "tailwind.config.ts",
    "tsconfig.json",
    "next.config.mjs",
    "postcss.config.mjs",
    "package.json"
)

Write-Host "🔄 Starting backup process..." -ForegroundColor Cyan
Write-Host "📍 Project Root: $projectRoot" -ForegroundColor Gray
Write-Host "📦 Backup File: $backupPath" -ForegroundColor Gray
Write-Host ""

# Create temporary backup folder
$tempBackupPath = Join-Path $projectRoot ".temp-backup"
if (Test-Path $tempBackupPath) {
    Remove-Item -Path $tempBackupPath -Recurse -Force
}
New-Item -ItemType Directory -Path $tempBackupPath -Force | Out-Null

# Copy files to temporary location
$fileCount = 0
foreach ($item in $itemsToBackup) {
    $sourcePath = Join-Path $projectRoot $item
    if (Test-Path $sourcePath) {
        $destPath = Join-Path $tempBackupPath $item
        $destDir = Split-Path $destPath
        
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
        }
        
        if ((Get-Item $sourcePath).PSIsContainer) {
            Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force | Out-Null
            Write-Host "✅ Copied folder: $item" -ForegroundColor Green
        } else {
            Copy-Item -Path $sourcePath -Destination $destPath -Force | Out-Null
            Write-Host "✅ Copied file: $item" -ForegroundColor Green
        }
        $fileCount++
    } else {
        Write-Host "⚠️  Not found: $item" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "🗜️  Compressing backup..." -ForegroundColor Cyan

# Compress to ZIP (PowerShell 5.0+)
try {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::CreateFromDirectory($tempBackupPath, $backupPath)
    Write-Host "✅ Backup created successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Backup Summary:" -ForegroundColor Cyan
    Write-Host "  • Items backed up: $fileCount" -ForegroundColor Gray
    Write-Host "  • File location: $backupPath" -ForegroundColor Gray
    
    # Get file size
    $fileSize = (Get-Item $backupPath).Length
    $fileSizeKB = [math]::Round($fileSize / 1KB, 2)
    Write-Host "  • Compressed size: $fileSizeKB KB" -ForegroundColor Gray
    
    # Keep only last 5 backups
    Write-Host ""
    Write-Host "🧹 Cleaning old backups (keeping last 5)..." -ForegroundColor Cyan
    $backups = Get-ChildItem -Path $backupDir -Filter "backup-*.zip" | Sort-Object CreationTime -Descending
    if ($backups.Count -gt 5) {
        $oldBackups = $backups | Select-Object -Skip 5
        foreach ($oldBackup in $oldBackups) {
            Remove-Item -Path $oldBackup.FullName -Force
            Write-Host "🗑️  Deleted: $($oldBackup.Name)" -ForegroundColor Yellow
        }
    }
    
    Write-Host ""
    Write-Host "✨ Backup process completed successfully!" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Error creating backup: $_" -ForegroundColor Red
    exit 1
} finally {
    # Clean up temporary folder
    if (Test-Path $tempBackupPath) {
        Remove-Item -Path $tempBackupPath -Recurse -Force
    }
}

# ============================================================================
# SETUP AUTOMATED BACKUP (Windows Task Scheduler)
# ============================================================================
# To schedule this script to run automatically:
# 
# 1. Open Task Scheduler (taskmgr or search "Task Scheduler")
# 2. Create New Task:
#    - Name: "Dashboard Desa Backup"
#    - Description: "Automated backup for Dashboard Transparansi Desa"
#    - Run with highest privileges: ✓ Checked
# 
# 3. Trigger Tab:
#    - New Trigger
#    - Type: Daily (or hourly if needed)
#    - Time: 22:00 (10 PM) every day
#    - Repeat: Every 1 day, indefinitely
#
# 4. Action Tab:
#    - Program/script: powershell.exe
#    - Arguments: -NoProfile -ExecutionPolicy Bypass -File "D:\PROJEK BESAR\desa-dashboard\scripts\backup.ps1"
#    - Start in: D:\PROJEK BESAR\desa-dashboard
#
# 5. Conditions Tab:
#    - Only run if user is logged in
#
# 6. Settings Tab:
#    - Allow task to be run on demand: ✓ Checked
#    - Stop task if it runs longer than: 30 minutes
#
# ============================================================================
