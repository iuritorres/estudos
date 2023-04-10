import java.util.ArrayList;

public class Cart {

    ArrayList<Product> cartItems = new ArrayList<Product>();

    public void showItems() {
        System.out.printf("%-20s %s\n", "PRODUTO", "PREÇO");
        System.out.println("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");

        for (Product product: this.cartItems) { product.show(); }
    }
}
