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
