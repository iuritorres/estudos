@REM Starts whithout log in console all functions, then clear terminal
ECHO OFF
CLS

@REM ---------- MAIN ----------

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

SET /p operador=Qual operacao deseja fazer? 

if %operador%==a goto add
if %operador%==A goto add

if %operador%==b goto sub
if %operador%==B goto sub

if %operador%==c goto div
if %operador%==C goto div

if %operador%==d goto mul
if %operador%==D goto mul

if %operador%==e goto quit
if %operador%==E goto quit

echo.
CLS
echo Operador invalido = %operador%
echo.
PAUSE
CLS

GOTO main


@REM --------- ADICAO ---------

:add
CLS

echo.
echo #=======================#
echo #                       #
echo #        ADICAO         #
echo #                       #
echo #=======================#
echo.

SET /p numero1="numero1: "
echo       +
SET /p numero2="numero2: "

SET /a result=numero1+numero2

echo.
echo #=======================#
echo       RESULTADO: %result%
echo #=======================#
echo.

PAUSE
CLS
GOTO main


@REM ------- SUBTRACAO --------

:sub
CLS

echo.
echo #=======================#
echo #                       #
echo #       SUBTRACAO       #
echo #                       #
echo #=======================#
echo.

SET /p numero1="numero1: "
echo       -
SET /p numero2="numero2: "

SET /a result=numero1-numero2

echo.
echo #=======================#
echo       RESULTADO: %result%
echo #=======================#
echo.

PAUSE
CLS
GOTO main


@REM -------- DIVISAO ---------

:div
CLS

echo.
echo #=======================#
echo #                       #
echo #        DIVISAO        #
echo #                       #
echo #=======================#
echo.

SET /p numero1="numero1: "
echo       /
SET /p numero2="numero2: "

SET /a result=numero1/numero2

echo.
echo #=======================#
echo       RESULTADO: %result%
echo #=======================#
echo.

PAUSE
CLS
GOTO main


@REM ----- MULTIPLICACAO ------

:mul
CLS

echo.
echo #=======================#
echo #                       #
echo #     MULTIPLICACAO     #
echo #                       #
echo #=======================#
echo.

SET /p numero1="numero1: "
echo       *
SET /p numero2="numero2: "

SET /a result=numero1*numero2

echo.
echo #=======================#
echo       RESULTADO: %result%
echo #=======================#
echo.

PAUSE
CLS
GOTO main


@REM Exit
:quit

