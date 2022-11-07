import os
os.system('cls')

##########

binarios = ['0110100000', '1001011111', '1110001010', '0111010101', '0011100110', '1010011001', '1101100100', '1011010100', '1001100111', '1000011000']

def decifraSenha():
    binaryPassword = []
    decimalPassword = 0

    # Return one binary number
    for i in range(len(binarios)):
        qntNumero = binarios[i].count('0')

        if qntNumero > 5:
            binaryPassword.append('0')
        else:
            binaryPassword.append('1')

    # Return a decimal number
    binaryPassword.reverse()

    for i in range(len(binaryPassword)):
        newNumber = int(binaryPassword[i]) * 2**i
        decimalPassword += newNumber

    # Return 
    return print(decimalPassword)

decifraSenha()

