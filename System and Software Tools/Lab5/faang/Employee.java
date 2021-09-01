public class Employee {
    public String name;
    public String position;
    public String description;
    public String picture;

    public Employee(String name, String position, String description, String picture) {
        this.name = name;
        this.position = position;
        this.description = description;
        this.picture = picture;
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

    public String getPosition() {
        return this.position;
    }

    public String toString() {
        return "Employee";
    }
}
