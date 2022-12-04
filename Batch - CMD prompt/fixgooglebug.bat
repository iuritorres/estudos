@echo off

rem Ask for admin user permissions to execute changes on "Program Files" folder
set "params=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

rem Enter in Google Folder, delete corrupted .exe, rename to fix the newer
CD C:\Program Files\Google\Chrome\Application
DEL /f /a chrome1.exe
REN "chrome.exe" "chrome1.exe"

rem Remove in Desktop the old chrome.lnk
CD C:\Users\iurit\Desktop
DEL /f /a chrome.lnk

rem Create a new .lnk
SETLOCAL ENABLEDELAYEDEXPANSION
SET LinkName=chrome
SET Esc_LinkDest=%%USERPROFILE%%\Desktop\!LinkName!.lnk
SET Esc_LinkTarget=C:\Program Files\Google\Chrome\Application\chrome1.exe
SET cSctVBS=CreateShortcut.vbs
SET LOG=".\%~N0_runtime.log"
((
  echo Set oWS = WScript.CreateObject^("WScript.Shell"^) 
  echo sLinkFile = oWS.ExpandEnvironmentStrings^("!Esc_LinkDest!"^)
  echo Set oLink = oWS.CreateShortcut^(sLinkFile^) 
  echo oLink.TargetPath = oWS.ExpandEnvironmentStrings^("!Esc_LinkTarget!"^)
  echo oLink.Save
)1>!cSctVBS!
cscript //nologo .\!cSctVBS!
DEL !cSctVBS! /f /q
)1>>!LOG! 2>>&1

rem Deleting runtime.log
DEL /f /a fixgooglebug_runtime.log

