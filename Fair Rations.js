function fairRations(B) {
  let odds = [];
  let breads = 0;
  for (var i =0; i < B.length; i++){
    if (B[i] % 2 != 0){
      odds.push(B[i]);
    }  
  }
  console.log(odds);
  if (odds.length % 2 != 0) {
    return "NO";
  }
  for (var j=0; j < B.length; j++){
    if (B[j] % 2 != 0) {
      B[j]++;
      B[j + 1]++;
      breads += 2;
    }
  }
  return breads;
}
