// Que Build string using map function  first character of each string of array

// var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

function getFirstChar(animals){
    return animals.charAt(0);
}
var ans=animals.map(getFirstChar);
console.log(ans.join(""));
