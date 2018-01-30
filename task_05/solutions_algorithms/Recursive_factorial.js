var factorial = function(n) {
    var result = 1;
    
    if (n===0) {
        return 1;
    } else {
     return n*(factorial(n-1));   
    }
	// base case: 
	
	// recursive case:
}; 

println("The value of 0! is " + factorial(0) + ".");
println("The value of 5! is " + factorial(5) + ".");

Program.assertEqual(factorial(0), 1);
Program.assertEqual(factorial(5), 120);
Program.assertEqual(factorial(2), 2);
Program.assertEqual(factorial(3), 6);