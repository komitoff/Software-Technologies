package homework;

import java.util.Scanner;

public class VowelOrDigit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        char symbol = scanner.next().toLowerCase().charAt(0);
        int asciiCode = (int) symbol;
        if (asciiCode >= 48 && asciiCode <= 57) {
            System.out.println("digit");
        }
        else if ( asciiCode == 97 ||
                  asciiCode == 101 ||
                  asciiCode == 105 ||
                  asciiCode == 111 ||
                  asciiCode == 117 ||
                  asciiCode == 121) {
            System.out.println("vowel");
        }
        else {
            System.out.println("other");
        }
    }
}

