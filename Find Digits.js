function findDigits(n) {
    let brokens = n.toString().split("");
    let divisors = 0;
    for (var i=0; i < brokens.length; i++){
      console.log(brokens)
        if (n % brokens[i] == 0) {
            divisors++;
        } 
    }
    return divisors;
}
