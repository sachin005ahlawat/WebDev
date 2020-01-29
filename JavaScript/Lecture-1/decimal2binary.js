function d2b(decimal){
    var binary=0;
    var placevalue=1;
    while(decimal>0){
        var facevalue = decimal%2;
        binary=binary+facevalue*placevalue;
        placevalue=placevalue*10;
        decimal=Math.floor(decimal/2);
    }
    return binary;
}
console.log(d2b(13));