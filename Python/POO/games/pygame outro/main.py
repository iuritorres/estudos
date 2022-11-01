# Imports
import pygame
from pygame.locals import *
from sys import exit

# Init
pygame.init()

# Screen Settings
screenWidth = 1280
screenHeight = 720

screen = pygame.display.set_mode((screenWidth, screenHeight)) # TELA
pygame.display.set_caption('Jogo Teste')

# Game Loop

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    pygame.draw.rect(screen, (255, 0, 0), (200, 300, 40, 50))
    pygame.draw.circle(screen, (255, 0, 0), (300, 260), 40)
    
    pygame.display.update()