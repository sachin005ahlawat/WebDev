// Que Write a JavaScript function to sort the following array of objects by title value.  
//   var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245
//     }
//     ];

var arr=[121,1,132,122,111,100,2,4,5];
// console.log(arr.sort());  // dp sorting on the basis of dictionary

function comparator(x,y){
    if(x>y){
        return 1; //swap the larger number to the right
    }
    else if(x<y){
        return -1; //swap the smaller number to the left
    }
    else{
        return 0;
    }
}
console.log(arr.sort(comparator)); //does not change the actual array
