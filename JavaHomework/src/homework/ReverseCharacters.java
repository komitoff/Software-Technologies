package homework;
import java.util.Scanner;

public class ReverseCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuffer output = new StringBuffer();

        for (int i = 0; i < 3; i++) {
            output.append(scanner.nextLine());
        }

        System.out.println(output.reverse());
    }
}
