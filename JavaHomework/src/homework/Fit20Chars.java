package homework;

import java.util.Scanner;

public class Fit20Chars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        char[] symbols = input.toCharArray();
        int length = input.length();
        System.out.println(printCharArr(symbols));
    }

    public static StringBuffer printCharArr(char[] arr) {
        int MAX_LEN = 20;
        int arrLength = arr.length;
        StringBuffer output = new StringBuffer();
        for (int i = 0; i < MAX_LEN; i++) {
            if (i >= arrLength) {
                output.append('*');
                continue;
            }
            output.append(arr[i]);
        }

        return output;
    }
}
