import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Lab03 {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100);
        
        numbers.forEach(it -> System.out.println(it));

        final int sum = numbers
            .stream()
            .reduce((prevValue, currentValue) -> prevValue + currentValue)
            .get();
        System.out.println("Sum: " + sum);
        
        final int firstOddNumber = numbers
            .stream()
            .filter(it -> it % 2 != 0)
            .findFirst()
            .get();
        System.out.println("First odd number: " + firstOddNumber);
        
        final List<Integer> lstOfSquares = numbers
            .stream()
            .map(it -> it * it)
            .collect(Collectors.toList());

        System.out.println("List of squares: " + lstOfSquares);
     
        
    }
}    