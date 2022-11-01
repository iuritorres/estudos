# Imports
import pygame, sys, random

# Classes
class Crosshair(pygame.sprite.Sprite):
    def __init__(self, picture_path):
        super().__init__()

        self.image = pygame.image.load(picture_path)
        self.image = pygame.transform.scale(self.image, (30, 30))
        self.rect = self.image.get_rect()
        self.gunshot = pygame.mixer.Sound("games\pygame targets\gunshot.wav")

    def shoot(self):
        self.gunshot.play()
        pygame.sprite.spritecollide(crosshair, targetGroup, True)

    def update(self):
        self.rect.center = pygame.mouse.get_pos()

class Target(pygame.sprite.Sprite):
    def __init__(self, picture_path, pos_x, pos_y):
        super().__init__()

        self.image = pygame.image.load(picture_path)
        self.image = pygame.transform.scale(self.image, (70, 70))
        self.rect = self.image.get_rect()
        self.rect.center = [pos_x, pos_y]

# General Settings
pygame.init()
clock = pygame.time.Clock()

# Game Screen
screenWidth = 1280
screenHeight = 720
screen = pygame.display.set_mode((screenWidth, screenHeight))
background = pygame.image.load("games\pygame targets\BG.jpg")
pygame.mouse.set_visible(False)

# Crosshair
crosshair = Crosshair("games\pygame targets\crosshair.png")
crosshairGroup = pygame.sprite.Group()
crosshairGroup.add(crosshair)

# Targets
targetGroup = pygame.sprite.Group()
for target in range(20):
    new_target = Target("games\\pygame targets\\target.png", random.randrange(0, screenWidth), random.randrange(0, screenHeight))
    targetGroup.add(new_target)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if event.type == pygame.MOUSEBUTTONDOWN:
            crosshair.shoot()

    pygame.display.flip()
    screen.blit(background, (0, 0))
    targetGroup.draw(screen)
    crosshairGroup.draw(screen)
    crosshairGroup.update()
    clock.tick(60)