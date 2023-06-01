package JavaScript牟牟书.Ch05;

import java.time.LocalDate;
import java.util.Date;

import javax.swing.text.html.HTMLDocument.RunElement;

/**
 * date
 */
public class date {

    public static void main(String[] args) {
        Date date = new Date();
        int hours = date.getHours();
        if ((hours - 8) > 0) {
            System.out.println("running");
        }
    }
}