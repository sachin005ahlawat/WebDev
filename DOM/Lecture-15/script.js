//class => .myclass
//id => #myid
//tag => tagname
//document => globally availabele object that's inside your browser

const body = document.querySelector("body");
//crud
//create
const h1=document.createElement("h1");
h1.textContent="H1 element created through JS";
body.appendChild(h1);
h1.style.color="red";