public class Program {

    public static void main(String[] args) {
        Cart cart = new Cart();

        // fruit list
        String[] names = {"banana", "melancia", "abacate", "laranja", "tomate"};
        double[] prices = {3.67, 8.99, 4.25, 2.23, 3.99};

        // adding items in cartItems[]
        for (int i=0; i < names.length; i++) {
            cart.cartItems.add(new Product(names[i], prices[i]));
        }

        // printing
        cart.showItems();
    }
}
