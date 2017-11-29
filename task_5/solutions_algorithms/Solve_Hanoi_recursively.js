var solveHanoi = function(numDisks, fromPeg, toPeg) {
    // base case:  no disks to move
    if ( numDisks === 0 ) {
        return true;
    }
    // recursive case:
    var sparePeg = hanoi.getSparePeg(fromPeg, toPeg);
        solveHanoi(numDisks-1, fromPeg, sparePeg);
    hanoi.moveDisk(fromPeg, toPeg);
    solveHanoi(numDisks-1, sparePeg, toPeg);
};
