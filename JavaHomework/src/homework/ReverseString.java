package homework;

import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine();

        char[] symbols = text.toCharArray();

        for (int i = symbols.length - 1; i >= 0; i--) {
            System.out.print(symbols[i]);
        }
    }
}
