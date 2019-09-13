function getMoneySpent(keyboards, drives, b) {
    let maxCombination = 0;
    for (var i=0; i < keyboards.length; i++){
        for (var j=0; j < drives.length; j++){
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxCombination){
              maxCombination = keyboards[i] + drives[j];
            }
        }
    }
    return (maxCombination > 0? maxCombination : -1);
}
