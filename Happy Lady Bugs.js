function happyLadybugs(b) {
  let odds= 0;
  if(b.includes("_")){
    b = b.replace(/_/g, "").split("").sort()
    console.log(b)

    for(var i = 0; i<b.length;i++){

      if(b[i] != b[i+1] && b[i] != b[i-1]){
        odds++;
      }
    }
    if (odds >= 1) {
      return "NO";
    } else {
      return "YES";
    }
  } else {
    b = b.split("")
    for(var i = 0; i<b.length;i++){
      if(b[i] != b[i+1] && b[i] != b[i-1]){
        odds++;
      }
    }
      if (odds >= 1) {
        return "NO";
      } else {
        console.log(odds)
        return "YES";
      }
    }
}
