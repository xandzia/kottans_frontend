var swap = function(array, firstIndex, secondIndex) {
    var seven = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = seven;
};

var testArray = [7, 9, 4];
swap(testArray, 0, 1);

println(testArray);

Program.assertEqual(testArray, [9, 7, 4]);

swap(testArray, 0, 2);
Program.assertEqual(testArray, [9, , 4]);

swap(testArray, 1, 2);
Program.assertEqual(testArray, [9, 7, 4]);