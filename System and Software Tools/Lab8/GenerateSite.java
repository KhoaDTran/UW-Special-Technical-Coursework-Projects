import java.util.Arrays;
import java.util.stream.Stream;
import java.util.List;
import java.util.stream.Collectors;
import java.lang.reflect.Method; 
import java.lang.reflect.Field; 
import java.io.*;

public class GenerateSite {
    public static final String listStart = "<ul>";
    public static final String listEnd = "</ul>";
    public static final String itemStart = "<li>";
    public static final String itemEnd = "</li>";

    public static void main(String[] args) throws Exception {
        Class<?> staff = Staff.class;
        Class<?> employee = Employee.class;
        Object dummy = staff.getDeclaredConstructor().newInstance();

        clearFiles(".");
        clearFiles("staff");
        PrintStream out = new PrintStream(new File("index.html"));

        Method[] methods = staff.getMethods();
        Stream<Method> stream1 = Arrays.stream(methods);
        List<Method> employeeList = Arrays.stream(methods)
                .filter(line -> line.getReturnType().equals(employee))
                .collect(Collectors.toList());

        printHeader(out, "FAANG");
        out.println(indent(2) + "<h1><span class=\"company\">FAANG</span><span class=\"slogan\">Insert Catchy Slogan Here</span></h1>");

        out.println(indent(2) + "<div class=\"wrap\">");
        out.println(indent(3) + "<div class=\"left_col\">");
        out.println(indent(4) + "<p class=\"tab\">Products</p>");
        out.println(indent(4) + listStart);
        
        out.close();

        GenerateProducts.main(null);
        out = new PrintStream(new FileOutputStream("index.html", true));
        out.println(indent(3) + "</div>"); // end of left column
        out.println(indent(3) + "<div class=\"right_col\">");
        out.println(indent(4) + "<p class=\"tab\">Staff</p>");
        out.close();
        GenerateStaff.main(null);

        out = new PrintStream(new FileOutputStream("index.html", true));

        out.println(indent(3) + "</div>"); // end of right column
        out.println(indent(2) + "</div>");

        printFooter(out);
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
        out.println(indent(2) + "<link rel=\"stylesheet\" href=\"assets/style.css\">");
        out.println(indent(2) + "<title>" + title + "</title>");
        out.println(indent(1) + "</head>");
        out.println(indent(1) + "<body>");
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
