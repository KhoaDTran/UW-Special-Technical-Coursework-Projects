import java.util.Arrays;
import java.util.stream.Stream;
import java.util.List;
import java.util.stream.Collectors;
import java.lang.reflect.Method; 
import java.lang.reflect.Field; 
import java.io.*;

public class GenerateStaff {
    public static final String listStart = "<ul>";
    public static final String listEnd = "</ul>";
    public static final String itemStart = "<li>";
    public static final String itemEnd = "</li>";

    public static void main(String[] args) throws Exception {
        Class<?> staff = Staff.class;
        Class<?> employee = Employee.class;
        Object dummy = staff.getDeclaredConstructor().newInstance();

        clearFiles("staff");
        PrintStream out = new PrintStream(new FileOutputStream("index.html", true));

        Method[] methods = staff.getMethods();
        Stream<Method> stream1 = Arrays.stream(methods);
        List<Method> employeeList = Arrays.stream(methods)
                .filter(line -> line.getReturnType().equals(employee))
                .collect(Collectors.toList());

        for (Method m : employeeList) { // add all employees to home page
            // Get info about the employee
            Employee p = (Employee)m.invoke(dummy);
            String name = p.getName();
            String description = p.getDescription();
            String picture = p.getPicture();
            String position = p.getPosition();

            // Create new file
            File employeeFile = new File("staff/" + name + ".html");
            employeeFile.createNewFile();
            PrintStream outEmployeeFile = new PrintStream(employeeFile);
            printHeader(outEmployeeFile, name);

            out.println(indent(5) + itemStart + "<a class=\"entry\" href=\"staff/" + name + ".html\">" + name + "</a>" + itemEnd);

            outEmployeeFile.println(indent(3) + listStart);
            outEmployeeFile.println(indent(4) + itemStart + "<span class=\"about\">Position: " + position + "</span>" + itemEnd);
            outEmployeeFile.println(indent(4) + itemStart + "<span class=\"about\">About: " +  description + "</span>" + itemEnd);
            outEmployeeFile.println(indent(4) +  "<img src=\"" + "../images/staff/" + picture + "\" target=\"_blank\"></img>");
            outEmployeeFile.println(indent(3) + listEnd);

            printFooter(outEmployeeFile);
        }

        out.close();
    }

    private static void clearFiles(String dir) {
        File currentDir = new File(dir);

        if (!currentDir.exists())
            currentDir.mkdir();

        for (File f : currentDir.listFiles()) {
            if (f.getName().endsWith(".html")) {
                f.delete();
            }
        }
    }

    private static void printHeader(PrintStream out, String title) {
        out.println("<html>");
        out.println(indent(1) + "<head>");
        out.println(indent(2) + "<link rel=\"stylesheet\" href=\"../assets/style.css\">");
        out.println(indent(2) + "<title>" + title + "</title>");
        out.println(indent(1) + "</head>");
        out.println(indent(1) + "<body>");
        out.println(indent(2) + "<h1>" + title + "</h1>");
    }

    private static void printFooter(PrintStream out) {
        out.println(indent(2) + listEnd);
        out.println(indent(1) + "</body>");
        out.println("</html>");
    }

    private static String indent(int n) {
        String s = "";
        for (int i = 0; i < n * 4; i++) {
            s += " ";
        }
        return s;
    }
}
