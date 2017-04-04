package homework;

import java.util.Scanner;

public class MaxSequenceOfIncreasingElements {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] input = scanner.nextLine().split("\\s+");
        int length = input.length;
        int[] numbers = new int[length];
        for (int i = 0; i < length; i++) {
            numbers[i] = Integer.parseInt(input[i]);
        }

        int maxCount = 1;
        int mostFrequentElement = 0;
        int currentCount = 1;
        int element = numbers[0];

        for (int i = 1; i < length; i++) {

            if (element != numbers[i]) {
                currentCount = 0;
            }
            currentCount ++;

            if (currentCount > maxCount) {
                maxCount = currentCount;
                mostFrequentElement = element;
            }
            element = numbers[i];
        }

        for (int i = 0; i < maxCount; i++) {
            System.out.printf(mostFrequentElement + " ");
        }

    }
}
