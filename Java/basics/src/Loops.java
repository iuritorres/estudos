public class Loops {

    public static void main(String[] args) {
        // WHILE LOOP
        int iterator = 0;
        while (iterator < 11) {
            System.out.println(iterator);
            iterator++;
        }

        // FOR LOOP
        for (int i = 0; i < 11; i++) {
            System.out.println(i);
        }

        // DO WHILE LOOP
        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 11);
    }
}
