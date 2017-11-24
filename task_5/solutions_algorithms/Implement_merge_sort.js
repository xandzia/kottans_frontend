// Overview of merge sort

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    if (p < r) {
    var q = Math.floor((p + r) /2);
    mergeSort(array, p, q );
    mergeSort(array, q+1, r );
    merge(array, p, q, r );
}
};

// Linear-time merging

// Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
    while ( i<lowHalf.length  &&  j<highHalf.length ) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i++;

        } else {
            array[k] = highHalf[j];
            j++;
        }
        k++;
    }
    while ( i < lowHalf.length ) {
        array[k] = lowHalf[i];
        i++;
        k++;

    }
    while ( j < highHalf.length ) {
        array[k] = highHalf[j];
        j++;
        k++;
 
    }
    
    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array
    
