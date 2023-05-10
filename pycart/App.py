# from os import system
from products import products
from Cart import Cart
# from Product import Product

class App:
    def __init__(self) -> None:
        self.cart
        self.product
        self.database

    @staticmethod
    def initialize(deps) -> object:
        database = deps['database']

        cart = Cart(database)
        return cart.init()

# main module initialization
if __name__ == '__main__':
    App.initialize({
        'database': products
    })