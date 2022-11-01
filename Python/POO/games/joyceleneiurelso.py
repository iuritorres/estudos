import os 
os.system("cls")

combustivel = 2
consumo = 20 #Km/L
postoGasolina = [2, 10.2, 15, 22]

def calcula_distancia(combustivel, consumo, postoGasolina):
    distanciaRestante = (combustivel * consumo)

    for i in range(len(postoGasolina)):
        if postoGasolina[i] > distanciaRestante:
            print(f'O posto mais próximo fica a {postoGasolina[i - 1]}Km!')
        else:
            print('-1')
            break


calcula_distancia(combustivel, consumo, postoGasolina)