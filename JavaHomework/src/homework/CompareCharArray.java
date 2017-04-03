package homework;

import java.util.Collection;
import java.util.Scanner;

public class CompareCharArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] firstArr = scanner
                .nextLine()
                .split(" ");

        String [] secondArr = scanner
                .nextLine()
                .split(" ");

        System.out.println(firstArr);
        //int minLen = Math.min(firstArr.length, secondArr.length);

//        boolean flag = false;
//
//        for (int i = 0; i < minLen; i++) {
//            if ((int)firstArr[i] < (int)secondArr[i]) {
//                printArr(firstArr);
//                printArr(secondArr);
//                flag = true;
//                break;
//            }
//
//            if ((int)firstArr[i] > (int)secondArr[i]) {
//                printArr(secondArr);
//                printArr(firstArr);
//                flag = true;
//                break;
//            }
//        }
//
//        if(!flag) {
//            printArr(firstArr);
//            printArr(secondArr);
//        }
    }

    public static void printArr(char[] collection) {
        for (char element : collection) {
            System.out.print(element);
        }
    }
}
