import java.util.Scanner;

class Roman {
    static public int RomanToInteger(char str) {
        if (str == 'I')
            return 1;
        else if (str == 'V')
            return 5;
        else if (str == 'X')
            return 10;
        else if (str == 'L')
            return 50;
        else if (str == 'C')
            return 100;
        else if (str == 'D')
            return 500;
        else
            return 1000; // that means str == 'M'

    }

    // method overloaded by parameter type
    static public int RomanToInteger(String str) {
        int result = 0;
        if (str.length() == 1)
            return RomanToInteger(str.charAt(0));
        for (int i = 0; i < str.length() - 1; i++) {
            // if the current roman char is greater than next roman char, add the current
            // one to result
            if (RomanToInteger(str.charAt(i)) >= RomanToInteger(str.charAt(i + 1))) {
                result = result + RomanToInteger(str.charAt(i));
            }
            // if the current roman char is lesser than next roman char, substract the
            // current one from result
            else {
                result = result - RomanToInteger(str.charAt(i));
            }
        }
        // finally add the last Roman to result and return it
        return result + RomanToInteger(str.charAt(str.length() - 1));
    }
}

public class RomanNumbers {
    public static void main(String[] Args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the roman number : ");
        System.out.println(Roman.RomanToInteger(sc.next()));
        sc.close();
    }
}
