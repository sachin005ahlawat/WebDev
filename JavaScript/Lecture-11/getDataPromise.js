//Que Give the output of following code ??
function getData(num) {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve(num);
      }, 1000);
  }) 
  }
  var x;
  getData(40)
  .then(function(num1){
        x = 1 + num1;
        console.log(x);
        return getData(30);
  }).then(function(num2) {
        var y = 1 + num2;
        console.log(y);
        return getData(x + y); 
  }).then( function(num3) {
      console.log(num3);
  });
  