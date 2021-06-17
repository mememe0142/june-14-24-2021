import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JavaNewFeatures {
    public static void main(String[] args) {
        //Map<String, List<String>> cities = new HashMap<>();
        var cities = new HashMap<>();
        cities.put("India", Arrays.asList("Chennai", "Mumbai"));
        //cities = "string"; //Compile-time gimmick, unlike JS
    }
    
}