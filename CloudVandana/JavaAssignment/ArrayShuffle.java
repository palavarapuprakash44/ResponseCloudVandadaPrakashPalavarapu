import java.util.Random;

class Shuffler {
    static int[] shuffleIt(int[] arr) {
        // this function shuffles the "array" and returns different output every time we
        // run

        int len = arr.length; // Store the length of target array in "len"
        Random rand = new Random();
        int shuffle_num = len * 2; // in the target array, to shuffle_num times two random elements will be swapped
        // shuffle_num can be any number, the larger number will assure best shuffle
        int a = 0;
        int b = 0;
        int temp = 0;
        for (int i = 0; i < shuffle_num; i++) {
            a = rand.nextInt(len);
            b = rand.nextInt(len);
            // shuffle a'th and b'th values
            temp = arr[b];
            arr[b] = arr[a];
            arr[a] = temp;
        }
        return arr;
    }
}

public class ArrayShuffle {
    public static void main(String Args[]) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };
        System.out.print("before shuffle : ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
        System.out.print("after shuffle  : ");
        Shuffler.shuffleIt(array); // as it was static method we can call with class name
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }
}