var print=console.log;
var cap={
        firstName:"Steve",
        "last Name":"Rogers",
        age:45,
        friends:["Tony","Bruce","Peter"],
        address:{
            state:"New York",
            city:"Manhatten"
        },
        sayHi:function(){
            console.log("Cap says Hi");
        },
        key:"some value",
    };

//set
cap.movies=["Winter Solider","Avengers","Civil War"];
print(cap);
print("````````````````");

//Update
cap.age=40;
print(cap);
print("````````````````");

//Delete
delete cap.key;
print(cap);
print("````````````````");

//get => .operator, []

//.operator => when we know the key we use .operator
print(cap.firstname);
print(cap.friends);

//[] => when we dont know the key we use square brackets or some space is present in between the key
print(cap["firstname"]);
print(cap["last name"]);

for(var key in cap){
    print(key + " : " + cap[key]);
}

for(var key in cap){
    print(key + " : " + cap["key"]);   //or we can use cap.key instead of cap["key"]
}