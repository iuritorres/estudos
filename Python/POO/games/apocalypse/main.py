# Imports
import os

import player
import items

### Game
os.system('cls')

jogador = player.Player()

jogador.equipItem('helmet', 'Capacete Kevlar')
jogador.equipItem('chestplate', 'Camisa')
jogador.equipItem('boots', 'Botas Kevlar')
print(jogador.equipment)

