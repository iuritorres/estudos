# ignore
import os
os.system('cls')

# Exercicio 1
diaSemana = str(input('Qual o dia da semana?: ')).upper()

if diaSemana in ['SABADO', 'DOMINGO']:
    print('Hoje é dia de descanso')
else:
    print('Você precisa trabalhar!')


# Exercicio 2
arrayFrutas = ['Abacate', 'Morango', 'Maçã', 'Banana', 'Pera']

if 'Morango' in arrayFrutas:
    print('Morgano está na lista')
else:
    print('Morango não está na lista!')

# Exercicio 3
tuple = (1, 2, 3, 4)
results = []

for i in tuple:
    newValue = i * 2
    results.append(newValue)

print(results)

# Exercicio 4
# Criei a lista para nao ficar muitas linhas quebradas no resultado do console :D
arrayPares = []

for n in range(100, 151, 2): #'151' para evitar que o programa nao imprima o '150'
    arrayPares.append(n)

print(arrayPares)

# Exercicio 5
temperatura = 40

while temperatura > 35:
    print(temperatura)
    temperatura -= 1
    
# Exercicio 6
counter = 0
arrayCounter = [] # Lista para o mesmo uso da questao 4

while counter < 100:
    arrayCounter.append(counter)
    counter += 1

    if counter == 23:
        break

print(arrayCounter)

# Exercicio 7
emptyArray = []
fourVar = 4

while fourVar <= 20:
    if fourVar % 2 == 0:
        emptyArray.append(fourVar)
    
    fourVar += 1

print(emptyArray)

# Exercicio 8
nums = range(5, 45, 2)
newArray = []

for i in nums:
    newArray.append(i)

print(newArray)

# Exercicio 9
temperatura9 = float(input('Qual a temperatura?: '))

if temperatura9 > 30:
    print('Vista roupas leves')
else:
    print('Busque seus casacos!')

# Exercicio 10
phrase = "É melhor, muito melhor, contentar-se com a realidade; se ela não é tão brilhante como os sonhos, tem pelo menos a vantagem de existir."
arrayPhrase = []

for i in phrase:
    if i == 'r':
        arrayPhrase.append(i)

print(f'A letra "r" aparece {len(arrayPhrase)} na frase.')

# Exercicio 11
lista11 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

for i in range(len(lista11)):
  if i > 5:
    print(lista11[i])

# Exercicio 12
dict1 = {'a':1,'b':2}
dict2 = {'c':4,'d':5}

dict3 = {
    'a': dict2['c'],
    'b': dict2['d']
}

print(dict3)

