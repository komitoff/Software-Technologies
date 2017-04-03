package homework;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DataTypesAndMethods {
    public static void main(String[] args) throws IOException {
        BufferedReader reader =
                new BufferedReader(new InputStreamReader(System.in));

        String input = reader.readLine();

        int decimalNumber = Integer.parseInt(input, 16);
        System.out.println(decimalNumber);
    }
}
