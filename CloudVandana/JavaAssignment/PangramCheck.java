import java.util.Scanner;

class Pangram {
    static boolean checkPangram(String str) {
        String str1 = str.toLowerCase();
        char[] lis = str1.toCharArray();
        int[] check = new int[26];
        // this array 'int[] check', checks if all 26 letters present or not,
        // initially all are zero, i.e., no letter is present (inital assumption)
        for (char ch : lis) {
            if ('a' <= ch && ch <= 'z') {
                check[(int) ch - 97] = 1;
            }
        }
        for (int i : check) {
            if (i == 0)
                return false;
        }
        return true;
    }
}

public class PangramCheck {
    public static void main(String[] Args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("enter your statemnt : ");
        String str = sc.nextLine();
        sc.close();
        System.out.println("is your statement a pangram ? : " + Pangram.checkPangram(str));
    }
}