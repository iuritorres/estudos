public class Product {

    String name;
    double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // methods
    public void show() {
        String firstLetter = this.name.substring(0, 1).toUpperCase();
        String rest = this.name.substring(1);

        String titleName = firstLetter + rest;

        System.out.printf("%-20s R$%5.2f \n", titleName, this.price);
    }
}
