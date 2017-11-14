var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;
    
    for( var nextIndex = minIndex+1; nextIndex < array.length ; nextIndex++) {
        if( array[nextIndex] < minValue  ) {
            minIndex = nextIndex;
            minValue = array[nextIndex];
        }
    }

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    
    return minIndex;
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
 Program.assertEqual(index, 4);
 Program.assertEqual(indexOfMinimum(array,1) , 1);
Program.assertEqual(indexOfMinimum(array,5) , 6);

