function birthdayCakeCandles(ar) {
    let tallest= Math.max(...ar);
    let countTall=0;
    for (var i=0; i < ar.length; i++){
        if (tallest === ar[i]){
            countTall++;
        }
    }
    return countTall;
}
