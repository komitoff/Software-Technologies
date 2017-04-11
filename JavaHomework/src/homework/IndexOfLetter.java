package homework;

import java.util.Scanner;

public class IndexOfLetter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String inputText = scanner.nextLine();
        char[] symbols = inputText.toCharArray();

        for (int i = 0; i < symbols.length; i++) {
            int index = (int)symbols[i] - 97;
            System.out.println(symbols[i] + " -> " + index);
        }
    }
}
