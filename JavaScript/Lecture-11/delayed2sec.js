function delayed2sec(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I will give answer in 2 seconds");
        },2000);
    });
}

function delayed3sec(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I will give answer in 3 seconds");
        },3000);
    });
}

console.log("Before async fn");

// async function helper(){
//     console.log("Before code");

//     const answer=await delayed2sec();   //awaits make sure the curser does not move forward utill the answer of that function comes after timeout;

//     console.log(answer);

//     console.log("After code");
// }


// async function helper(){   // if we want to print them parallely
//     console.log("Before code");
//     const getAfter2=delayed2sec();
//     const getAfter3= delayed3sec();
//     console.log(await getAfter3);
//     console.log(getAfter2);
    
//     console.log("After code");
// }


async function helper(){
    try{           // if you feel some eroor can come in any code then write it in try and catch => if a error comes it will go in catch function
    console.log("Before code");
    const getAfter2=delayed2sec();
    const getAfter3= delayed3sec();
    console.log(await getAfter3);
    console.log(getAfter2);
    
    console.log("After code");
    }

    catch(err){    //catch is a function => data comes in his parameter
        console.log(err);
    }
}


//But outer lines will get printed untill it waits for 2 sec
helper();
console.log("After async function");