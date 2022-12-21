# Imports
import items

### Player
class Player():
    def __init__(self):

        # Attributes
        self.attributes = {
            'health': 20,
            'hunger': 20,
            'stamina': 10,
            'agility': 5,
        }

        # Hotbar
        self.hotbar = []

        # Secondary Hand
        self.secondaryHand = ''

        # Equipament
        self.equipment = {
            'helmet': '',
            'chestplate': '',
            'leggings': '',
            'boots': ''
        }

        # Inventory
        self.inventory = []

    def equipItem(self, category, item):
        self.equipment[f'{category}'] = items.Item().equippable[f'{category}'][items.Item().equippable[f'{category}'].index(item)]
        print(f'{category.capitalize()} - {item} equipado(a)!')
