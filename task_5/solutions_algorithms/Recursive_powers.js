var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    println("Computing " + x + " raised to power " + n + ".");
    // base case
    if ( n === 0 ) {
        return  1;
    } 
    // recursive case: n is negative
    if ( n < 0 ) {
    return 1 / power(x, -n);
    } 
    
    // recursive case: n is odd
        if ( n === isOdd(n) || n) {
        return x*(power(x, n-1));
    }
    // recursive case: n is even
    if ( n === isEven(n) ) {
        var result = power(x, n/2);
        return result*result;
    }
};

var displayPower = function(x, n) {
    println(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
Program.assertEqual(power(3, -1), 1/3);
displayPower(7, 0);
Program.assertEqual(power(7, 0), 1);
displayPower(1, 1);
Program.assertEqual(power(1, 1), 1);