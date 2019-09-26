function bonAppetit(bill, k, b) {
    let price = 0;
    for (var i=0; i<bill.length;i++){
        price += bill[i];
    }
    if ((price - bill[k]) / 2 === b){
        console.log('Bon Appetit');
    }
    else {
        console.log(b - (price - bill[k]) / 2);
    }
}

function bonAppetit(bill, k, b) {
  let totalAmount = 0;
  for(var i=0; i < bill.length; i++){
    totalAmount += bill[i];
  }
  let anna = (totalAmount - bill[k]) / 2; 
  if (anna == b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - anna); 
  }
}


function bonAppetit(bill, k, b) {
  let count = 0;
  for (let i = 0; i<bill.length; i++){
    if (i!==k) {count += (bill[i]/2)}
  }
  console.log((b == count) ? "Bon Appetit" : b-count)
}

function bonAppetit(bill, k, b) {
    let total = bill.reduce((a,b) => a+b);
    
    let anna = (total - bill[k]) / 2;
    let diff = b - anna;
    
    console.log(b > anna ? diff : "Bon Appetit");
}
