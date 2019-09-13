You can view the Beautiful Triplets algorithm [here](https://www.hackerrank.com/contests/microverse-coding-challenges/challenges/beautiful-triplets).

function beautifulTriplets(d, arr) {
  let beautifulTriplets=0;
  for(var i= 0; i < arr.length; i++){
    for (var j= 0; j < arr.length; j++){
      if (arr[i] - arr[j] === d) {
        for (var k = 0; k < arr.length; k++){
          if(arr[j] - arr[k] === d){
            beautifulTriplets++;
          }
        }
      }
    }
  }
  return beautifulTriplets;
}
