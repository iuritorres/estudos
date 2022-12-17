:: Starts whithout log in console all functions, then clear terminal
ECHO OFF
CLS

:: ---------- MAIN ----------
:main

echo.
echo #=======================#
echo #                       #
echo #   CALCULADORA BRABA   #
echo #                       #
echo #=======================#
echo.
echo #=======================#
echo #       OPERACOES       #
echo #                       #
echo # a) Adicao             #
echo # b) Subtracao          #
echo # c) Divisao            #
echo # d) Multiplicacao      #
echo # e) Sair               #
echo #                       #
echo #=======================#

SET /p opcao=Qual operacao deseja fazer? 

if %opcao%==a goto add
if %opcao%==A goto add

if %opcao%==b goto sub
if %opcao%==B goto sub

if %opcao%==c goto div
if %opcao%==C goto div

if %opcao%==d goto mul
if %opcao%==D goto mul

if %opcao%==e goto quit
if %opcao%==E goto quit

:add
	SET titulo_operacao=#        ADICAO         #
	SET operador=+
	GOTO calcpanel

:sub
	SET titulo_operacao=#       SUBTRACAO       #
	SET operador=-
	GOTO calcpanel

:div
	SET titulo_operacao=#        DIVISAO        #
	SET operador=/
	GOTO calcpanel

:mul
	SET titulo_operacao=#     MULTIPLICACAO     #
	SET operador=*
	GOTO calcpanel

:: Option Else
echo.
CLS
echo Opcao invalido = %opcao%
echo.
PAUSE
CLS

GOTO main

:: ------ CALC PANEL ------
:calcpanel
CLS

echo.
echo #=======================#
echo #                       #
echo %titulo_operacao%
echo #                       #
echo #=======================#
echo.

SET /p numero1="numero1: "
echo       %operador%
SET /p numero2="numero2: "

SET /a result=numero1%operador%numero2

echo.
echo #=======================#
echo       RESULTADO: %result%
echo #=======================#
echo.

PAUSE
CLS
GOTO main

:: Exit
:quit
