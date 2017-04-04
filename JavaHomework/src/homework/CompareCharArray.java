package homework;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class CompareCharArray {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] firstLine = input.nextLine().split("\\s+");
        String[] secondLine = input.nextLine().split("\\s+");
        Set<String> sorted = new TreeSet<>();
        sorted.add(stringify(firstLine));
        sorted.add(stringify(secondLine));

        for (String element : sorted) {
            System.out.println(element);
        }
    }

    public static String stringify (String[] input) {
        String output = "";
        for (int i = 0; i < input.length; i ++) {
            output = output.concat(input[i]);
        }
        return output;
    }
}
