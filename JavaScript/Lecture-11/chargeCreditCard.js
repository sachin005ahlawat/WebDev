var ajax=require("./lib/filedownload");
var amount=100;
var price=20;
function chargeCreditCard(){
    amount=amount-price;
}
ajax.trackCheckout("I bought something").then(chargeCreditCard);

setTimeout(function delay(){
    console.log("Your ramaining amt "+ amount);
},100);