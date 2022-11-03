import os
os.system('cls')

lista_vendas = [[32, 380, 60, 450],
                [75, 89, 56, 20, 30],
                [0],
                []]

def retornaMenorMaior(lista_vendas):
    listaMenorMaior = []
    listaVendasTotais = []

    for i in range(len(lista_vendas)):
        for index in range(len(lista_vendas[i])):
            newItem = lista_vendas[i][index]
            listaVendasTotais.append(newItem)
    
    if 0 in listaVendasTotais:
        listaVendasTotais.remove(0)

    listaMenorMaior.append(min(listaVendasTotais))
    listaMenorMaior.append(max(listaVendasTotais))

    print(listaMenorMaior)


retornaMenorMaior(lista_vendas)

