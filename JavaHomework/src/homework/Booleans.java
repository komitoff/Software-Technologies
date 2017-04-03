package homework;

import java.util.Scanner;

public class Booleans {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        boolean boolVariable = input.nextBoolean();
        if (boolVariable) {
            System.out.println("Yes");
        }
        else {
            System.out.println("No");
        }
    }
}
