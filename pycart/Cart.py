from os import system
from products import products

class Cart:
    def __init__(self, database) -> None:
        self.items = products
        self.database = database

    def init(self) -> None:
        system('cls')

        while True:
            self.showItems()
            print('ok')

            # end loop
            return True

    # list items
    def showItems(self):
        if len(self.items) != 0:
            print(f' {"_"*66} \n| STOCK  |   CATEGORY   | {"PRODUCT":<30} |  PRICE  |\n {"‾"*66}')

            for item in self.items:
                item.showProduct()

        else:
            print('The cart is empty!')

    # clear all items
    def clearItems(self) -> None:
        self.items.clear()

    # verify item in database
    def validateItem(self, id) -> bool:
        for product in self.database:
            if id == product.id:
                return True

        return False