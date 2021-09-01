public class Product {
    public String name;
    public String description;
    public String picture;
    public double price;

    public Product(String name, String description, String picture, double price) {
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.price = price;
    }

    public String getName() {
        return this.name;
    }

    public String getDescription() {
        return this.description;
    }

    public String getPicture() {
        return this.picture;
    }

    public double getPrice() {
        return this.price;
    }

    public String toString() {
        return "Product";
    }
}

