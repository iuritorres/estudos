# imports
import os

import player
import items

### game
os.system('cls') # limpa o console

jogador = player.Player()

jogador.equipItem('helmet', 'Capacete Kevlar')
jogador.equipItem('chestplate', 'Camisa')
print(jogador.equipment)
