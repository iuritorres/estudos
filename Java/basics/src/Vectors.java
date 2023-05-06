import java.util.Arrays;

public class Vectors {

    public static void main(String[] args) {
        String[] texts = {"eu", "tu", "ele", "ela"};

        String[] test = new String[4];
        /*test[0] = "One";
        test[1] = "Two";
        test[2] = "Three";
        test[3] = "Four";*/

        for (int i=0; i < test.length; i++) {
            int randomNumber = (int)Math.round(Math.random() * 100);
            test[i] = String.valueOf(randomNumber);
        }

        System.out.println(Arrays.toString(texts));
         System.out.println(Arrays.toString(test));
    }
}
