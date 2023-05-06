import java.time.*;

public class TimeAPI {

    // GENERAL DATE DATA
    public static void showDateStuffs() {
        LocalDate localDate = LocalDate.now();

        System.out.println("Week day: " + localDate.getDayOfWeek());
        System.out.println("Week day: " + localDate.getDayOfWeek().ordinal());
        System.out.println("Month: " + localDate.getMonthValue());
        System.out.println("Month: " + localDate.getMonth().ordinal());
        System.out.println("Month: " + localDate.getMonth().name());
        System.out.println("Year: " + localDate.getYear());
    }

    // INSTANT AND DURATION
    public static void gettingDurationTime() {
        Instant startTime = Instant.now();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException exception) {
            exception.printStackTrace();
        }

        Instant endTime = Instant.now();
        Duration duration = Duration.between(startTime, endTime);

        System.out.println(duration.toMillis());
    }

    // COMPARING DATES
    public static void compareDates() {
        LocalDate currentDate = LocalDate.now();
        LocalDate pastDate = LocalDate.of(2003, 9, 4);

        Period period = Period.between(pastDate, currentDate);

        boolean isBefore = currentDate.isBefore(pastDate);
        boolean isAfter = currentDate.isAfter(pastDate);
        boolean isEqual = currentDate.isEqual(pastDate);

        System.out.println("is Equal? " + isEqual);
        System.out.println("is Before? " + isBefore);
        System.out.println("is After? " + isAfter);

        int years = period.getYears();
        int months = period.getMonths();
        int days = period.getDays();

        System.out.printf("%d Years, %d Months and %d Days", years, months, days);
    }

    // ZONES
    public static void zones() {
        LocalDateTime localDate = LocalDateTime.now();

        ZonedDateTime timeRecife = ZonedDateTime.of(localDate, ZoneId.of("America/Recife"));
        System.out.printf("Recife: %s\n", timeRecife);

        ZonedDateTime timeParis = ZonedDateTime.of(localDate, ZoneId.of("Europe/Paris"));
        System.out.printf("Paris: %s\n", timeParis);

        Duration duration = Duration.between(timeRecife, timeParis);
        System.out.printf("Difference: %d Hours", duration.getSeconds() / 60 / 60);
    }

    // MAIN
    public static void main(String[] args) {
         showDateStuffs();
         gettingDurationTime();
         compareDates();
         zones();
    }
}
