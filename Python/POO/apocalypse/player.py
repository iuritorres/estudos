# imports
import items

### player
class Player():
    def __init__(self):

        # attributes
        self.attributes = {
            'health': 20,
            'hunger': 20,
            'stamina': 10
        }

        # hotbar
        self.hotbar = []

        # secondary_hand
        self.secondaryHand = ''

        # equipament
        self.equipment = {
            'helmet': '',
            'chestplate': '',
            'leggings': '',
            'boots': ''
        }

        # inventory
        self.inventory = []

    def equipItem(self, category, item):
        self.equipment[f'{category}'] = items.Item().equippable[f'{category}'][items.Item().equippable[f'{category}'].index(item)]
        print(f'{category.capitalize()} - {item} equipado(a)!')
