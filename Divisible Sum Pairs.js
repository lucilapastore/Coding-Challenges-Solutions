function divisibleSumPairs(n, k, ar) {
let pairs = 0;
for (let i=0; i < n; i++){
  for (let j= i+1; j < n; j++){
    if((ar[i] + ar[j]) % k === 0) {
      pairs++;
    }
  }
}
return pairs;
}

function divisibleSumPairs(n, k, ar) {
 let counter = 0;
 for (let j = 0; j<ar.length; j++){
   for (let i = 0; i<ar.length && i!==j; i++){
       if ((ar[i]+ar[j])%k == 0) counter++
     }
   }
return counter
}
