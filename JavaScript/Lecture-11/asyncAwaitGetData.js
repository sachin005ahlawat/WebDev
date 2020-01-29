//Que Give the output of following code ??
function getData(num) {
    return new Promise(function(resolve,reject){
      setTimeout(function() {
          resolve(num);
        }, 1000);
    }) 
    }
    var x;
    async function helper(){
        const num1=await getData(10);
          x = 1 + num1;
          console.log(x);
        const num2= await getData(30);
          var y = 1 + num2;
          console.log(y);
        const num3= await getData(x + y); 
        console.log(num3);
    }
    helper();
    
    