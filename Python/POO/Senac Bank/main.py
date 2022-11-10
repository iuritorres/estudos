# imports
import os
import sys
from time import sleep
from random import randint

# Users DataBase
validUsers = [
    {
        'accountNumber': 791,
        'owner': 'João Vitor Souza da Silva',
        'balance': 1300.54,
        'password': 'joao123'
    },
    {
        'accountNumber': 575,
        'owner': 'Iuri Barbosa Torres',
        'balance': 3870.90,
        'password': 'iuri123'
    },
    {
        'accountNumber': 367,
        'owner': 'Ketlen Joyce Muniz Silva Lopes',
        'balance': 7834.98,
        'password': 'joyce123'
    }
]

# Tools
class Tools:
    # Divider
    def divider():
        print('+'+'-'*50+'+')

# Account Class
class Account:
    # Login
    def login(accountNumber, password):
        # Validate user
        i = 0
        while i < len(validUsers):
            dic = validUsers[i]
            userNumber = dic.get('accountNumber')
            userPassword = dic.get('password')
            
            if userNumber == accountNumber:
                # Validate password
                if userPassword == password:
                    global userIndex
                    userIndex = i

                    return True
                
                else:
                    os.system('cls')
                    print('+'+'-'*50+'+')
                    print(f"|{'Você digitou uma senha invalida!':^50}|")
                    print('+'+'-'*50+'+')
                    break
            
            i += 1
            if i == len(validUsers):
                os.system('cls')
                print('+'+'-'*50+'+')
                print(f"|{'Você digitou um usuário invalido(a)!':^50}|")
                print('+'+'-'*50+'+')
        
    # Create Account
    def createAccount():
        os.system('cls') # clear console

        # Interface
        Tools.divider()
        print(f"|{'Criar conta':^50}|")
        Tools.divider()

        ownerCompleteName = str(input('-> Digite seu nome completo: ')).title()

        # Validate existing Account Numbers
        while True:
            newAccountNumber = randint(100, 999)

            i = 0
            while i < len(validUsers):
                dic = validUsers[i]
                existingNumber = dic.get('accountNumber')

                if newAccountNumber == existingNumber:
                    newAccountNumber = randint(100, 999)
                else:
                    break

                i += 1
                
            break

        # Validate deposit value
        while True:
            initialDeposit = float(input('-> Para continuar, efetue um depósito inicial: R$'))
            if initialDeposit <= 0:

                os.system('cls') # clear console
        
                Tools.divider()
                print(f"|{'Digite um valor maior que 0':^50}|")
                Tools.divider()
            else:
                break

        # Creating user password
        userPassword = str(input('-> Digite sua senha de acesso: '))

        # Adding user to database
        newUser = {
            'accountNumber': newAccountNumber,
            'owner': ownerCompleteName,
            'balance': initialDeposit,
            'password': userPassword
        }

        validUsers.append(newUser)

        # Warning user
        os.system('cls') # clear console

        accountNumber = 'Conta -> ' + str(newAccountNumber)
        accountOwner = 'Proprietário -> ' + str(ownerCompleteName)
        accountBalance = 'Saldo -> R$' + str(initialDeposit)

        Tools.divider()
        print(f"|{'Seus dados são':^50}|")
        Tools.divider()
        Tools.divider()
        print(f"| {accountNumber:<49}|")
        print(f"| {accountOwner:<49}|")
        print(f"| {accountBalance:<49}|")
        Tools.divider()    
        
        sleep(5)
        os.system('cls')

    # Show User data
    def showData():
        while True:
            os.system('cls') # clear console

            accountNumber = 'Conta -> ' + str(validUsers[userIndex].get('accountNumber'))
            accountOwner = 'Proprietário -> ' + str(validUsers[userIndex].get('owner'))
            accountBalance = 'Saldo -> R$' + str(validUsers[userIndex].get('balance'))
            back = '-> Aperte "Enter" para voltar...'

            Tools.divider()
            print(f"|{'Seus dados são':^50}|")
            Tools.divider()
            Tools.divider()
            print(f"| {accountNumber:<49}|")
            print(f"| {accountOwner:<49}|")
            print(f"| {accountBalance:<49}|")
            Tools.divider()    
            backToMenu = input(f'|{back:<50}|')

            if backToMenu != None:
                return True


    # Deposit Cash
    def deposit():
        os.system('cls') # clear console
        while True:

            # Get current balance
            currentBalance = validUsers[userIndex].get('balance')

            # Interface
            currentBalancePrint = ' Saldo Atual -> ' + str(currentBalance)
            Tools.divider()
            print(f"|{'Depositar dinheiro':^50}|")
            Tools.divider()

            Tools.divider()
            print(f"|{currentBalancePrint:<50}|")
            Tools.divider()

            # Update account balance
            depositValue = float(input('-> Insira o valor a ser depositado: R$'))

            if depositValue <= 0:
                os.system('cls') # clear console
        
                Tools.divider()
                print(f"|{'Digite um valor maior que 0':^50}|")
                Tools.divider()
            else:
                currentBalance += depositValue
                validUsers[userIndex]['balance'] = currentBalance

                return True

    # Withdraw Cash
    def withdrawCash():
        os.system('cls') # clear console
        while True:

            # Get current balance
            currentBalance = validUsers[userIndex].get('balance')

            # Interface
            currentBalancePrint = ' Saldo Atual -> ' + str(currentBalance)
            Tools.divider()
            print(f"|{'Sacar dinheiro':^50}|")
            Tools.divider()

            Tools.divider()
            print(f"|{currentBalancePrint:<50}|")
            Tools.divider()

            # Update account balance
            withdrawValue = float(input('-> Insira o valor a ser sacado: R$'))

            if withdrawValue > currentBalance:
                os.system('cls') # clear console
        
                Tools.divider()
                print(f"|{'Você não tem saldo suficiente! Pobre hahah':^50}|")
                Tools.divider()
            else:
                currentBalance -= withdrawValue
                validUsers[userIndex]['balance'] = currentBalance

                return True

    # To see transaction history
    def transactionHistory():
        pass


# Main - SenacBankSystem
class SenacBankSystem:

    ## Starts System
    def init(loggedStatus=False):
        os.system('cls') # clear console

        # Starts System Menu Loop if logged=False
        if loggedStatus == False:
            
            while True:
                # Initial Form
                options = ['Login', 'Criar Conta', 'Sair']
                newLine =  '\n' + f"{'|':<51}" + f"{'|':>}"

                Tools.divider()
                print(f"{'| Bem vindo ao Senac Bank!':<50} {'|':>}")
                print(f"{'| O que deseja fazer?:':<50} {'|':>} {newLine}")
                
                for i in range(len(options)): print(f"| {i+1} -> {options[i]:<43} {'|':>}")
                Tools.divider()

                # Validate Options
                chosenOption = str(input('\n-> Escolha uma opção: '))
                
                # Login Option
                if chosenOption == '1':
                    if SenacBankSystem.login() == True:
                        SenacBankSystem.init(True)
                        break
                # Create Account
                elif chosenOption == '2':
                    Account.createAccount()
                # Exit System
                elif chosenOption == '3':
                    SenacBankSystem.exit()

        # Starts Logged User Menu
        if loggedStatus == True:

            while True:
                # Welcome of login
                firstName = 'Bem vindo ' + validUsers[userIndex]['owner'].split(' ')[0]

                print('+'+'-'*50+'+')
                print(f'|{firstName:^50}|')
                print('+'+'-'*50+'+')

                # Initial Logged Menu Form
                options = ['Mostrar Dados', 'Depositar', 'Sacar', 'Sair']
                newLine =  '\n' + f"{'|':<51}" + f"{'|':>}"

                Tools.divider()
                print(f"{'| Bem vindo ao Senac Bank!':<50} {'|':>}")
                print(f"{'| O que deseja fazer?:':<50} {'|':>} {newLine}")
                
                for i in range(len(options)): print(f"| {i+1} -> {options[i]:<43} {'|':>}")
                Tools.divider()

                # Validate Options
                chosenOption = str(input('\n-> Escolha uma opção: '))

                # Show user data
                if chosenOption == '1':
                    if Account.showData() == True:
                        SenacBankSystem.init(True)
                # Deposit
                elif chosenOption == '2':
                    if Account.deposit() == True:
                        SenacBankSystem.init(True)
                
                # Withdraw
                elif chosenOption == '3':
                    if Account.withdrawCash() == True:
                        SenacBankSystem.init(True)

                # Exit System
                elif chosenOption == '4':
                    SenacBankSystem.exit()


    ## Call an Account login
    def login():
        os.system('cls')

        # Starts login loop
        while True:
            newLine =  '\n' + f"{'|':<51}" + f"{'|':>}"

            Tools.divider()
            print(f"{'| Entrar em uma conta existente:':<50} {'|':>} {newLine}")
            print(f"{'| -> Numero da conta: ':<50} {'|':>}")
            Tools.divider()

            # Login Informations
            accountNumber = int(input('\n-> Insira o número da conta: '))
            
            os.system('cls') # clear console
            Tools.divider()
            print(f"{'| Entrar em uma conta existente:':<50} {'|':>} {newLine}")
            print(f"{'| -> Numero da conta: {}':<49} {'|':>}".format(accountNumber))
            Tools.divider()

            password = str(input('\n-> Insira sua senha: '))
            
            for i in range(4):
                os.system('cls') # clear console
                Tools.divider()
                print(f"{'|':<} {'Validando{}':^{50-i}} {'|':>}".format('.'*i))
                Tools.divider()
                sleep(0.5)

            # Send parameters to Account class
            if Account.login(accountNumber, password) == True:
                return True       

    ## Quit system
    def exit():
        os.system('cls') # clear console
        Tools.divider()
        print(f"{'|':<} {'Você escolheu a opção sair...':^48} {'|':>}")
        Tools.divider()

        sleep(1)
        os.system('cls')
        
        # timer to end
        for i in range(3, 0, -1):
            os.system('cls')
            Tools.divider()
            print(f"{'|':<} {'Você escolheu a opção sair...':^48} {'|':>}")
            print(f"{'|':<} {'Sistema finalizando em {} segundos':^49} {'|':>}".format(i))
            Tools.divider()
            sleep(1)

        # End System
        os.system('cls')
        sys.exit()

# System Init
SenacBankSystem.init()
