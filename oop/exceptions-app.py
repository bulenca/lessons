from abc import ABC, abstractmethod

class Product(ABC):
    def __init__(self, name, price):
        self.name = name
        self.price = price

    @abstractmethod
    def description(self):
        pass

class Book(Product):
    def __init__(self, name, price, author, releaseDate):
        super().__init__(name, price)
        self.author = author
        self.releaseDate = releaseDate

    def description(self):
        return f"{self.name} | Autor: {self.author} , wydanie z roku {self.releaseDate}"

class Movie(Product):
    def __init__(self, name, price, director, releaseDate):
        super().__init__(name, price)
        self.director = director
        self.releaseDate = releaseDate

    def description(self):
        return f"{self.name} | reżyser: {self.director}, produkcja z roku {self.releaseDate}"
    
class Cart:
    def __init__(self):
        self.products = {}
        self.totalPrice = 0

    
    def add_product(self, product: Product, quantity: int):
        if quantity < 1:
            raise ValueError("Ilość wybranego produktu musi być większa od zera!")
        if product in self.products:
            self.products[product] += quantity
        else:
            self.products[product] = quantity
        self.totalPrice += product.price * quantity

        return f"Dodano produkt do koszyka: [{product.description()}] o ilości {quantity}"

    def checkout(self):
        if not self.products:
            raise Exception('Your cart is empty!')
        
        if self.totalPrice > 1000:
            raise ValueError("Your total price of cart is too high! Maximum value is 1000$")

        if self.totalPrice < 20:
            raise ValueError("Your total price of cart is too low! Minimum value is 20$")
        
        if len(self.products) > 10:
            raise Exception("You can't buy more than 10 various products at once.")
        

        return f"Your order has been placed. Total price: {self.totalPrice}$"


class ShopFacade:
    
    def __init__(self):
        self.cart = Cart()


    def operation(self):    
        try:
            book1 = Book('Quo Vadis', 13, 'Henryk Sienkiewicz', 1896)
            movie1 = Movie('Forest Gump', 20, 'Robert Zemeckis', 1994)
            
            print(self.cart.add_product(book1, 2))
            print(self.cart.add_product(movie1, 3))

            print(self.cart.checkout())

        except Exception as exp:
            print(f"[ERROR]: {exp}")
        
        else:
            print('MovieBooks Shop©️ works correctly...')
        
        finally:
            print("MovieBooks Shop©️ 2023 | Contact: +1 349 2394 291")


facade = ShopFacade()
facade.operation()