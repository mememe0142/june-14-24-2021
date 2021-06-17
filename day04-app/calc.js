class Calculator {
    add(a, b) {
        //this.sleep(10);
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    square(num) {
        return num * num;
    }

    sleep(seconds) {
        let start = new Date().getTime(),
        delay = seconds * 1000;
    
        while (true) {
            if ((new Date().getTime() - start) > delay) {
                break;
            }
        }
    }
}
module.exports = Calculator;