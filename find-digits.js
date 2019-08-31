function findDigits(n) {
    let dividend = n;
    let separatedDivisors = n.toString().split("")
    let countDivisors = 0;
    for (var i = 0; i < separatedDivisors.length; i++){
            if (dividend % separatedDivisors[i] === 0) {
                countDivisors++;
            }
        }
    return countDivisors;
}
