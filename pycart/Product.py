class Product:
    def __init__(self, id, name, price, category, stock) -> None:
        self.id = id
        self.name = name
        self.price = price
        self.category = category
        self.stock = stock
        self.discount = 0

    def showProduct(self) -> None:
        print(f' {self.stock:<7} | {self.category.upper():<12} | {self.name.title():.<31}', end='')
        print(f'R${self.price:8.2f}')

    def applyDiscount(self, percentage) -> None:
        discount = ( (percentage / 100) * self.price )
        self.price = self.price - discount