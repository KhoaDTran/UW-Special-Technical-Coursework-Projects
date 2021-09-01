import java.io.*;

public class CheckTransactions {
    public static void main(String[] args) {
        System.out.println("SUCCESS: ITEM ID: 78905, TIME: 12:45:05, QUANTITY: 4");
        System.out.println("SUCCESS: ITEM ID: 78907, TIME: 12:46:07, QUANTITY: 1");
        System.out.println("SUCCESS: ITEM ID: 68561, TIME: 12:47:33, QUANTITY: 2");
        System.out.println("SUCCESS: ITEM ID: 87451, TIME: 12:47:33, QUANTITY: 2");
        System.err.println("ERROR: InsufficientBalance, ITEM ID: 87451, TIME: 12:47:33, QUANTITY: 2");
        System.out.println("SUCCESS: ITEM ID: 84451, TIME: 12:47:33, QUANTITY: 17");
        System.out.println("SUCCESS: ITEM ID: 83452, TIME: 12:48:34, QUANTITY: 1");
        System.err.println("ERROR: DroppedConnection, ITEM ID: 87451, TIME: 12:49:59, QUANTITY: 2");
        System.out.println("SUCCESS: ITEM ID: 89321, TIME: 12:51:00, QUANTITY: 42");
        System.out.println("SUCCESS: ITEM ID: 90131, TIME: 12:51:06, QUANTITY: 22");
        System.out.println("SUCCESS: ITEM ID: 89321, TIME: 12:52:34, QUANTITY: 1");
        System.err.println("ERROR: InsufficientInventory ITEM ID: 000000, TIME: 12:52:25, QUANTITY: 150");
    }
}
