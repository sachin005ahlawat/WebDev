const liArr=document.getElementsByTagName("li");
const option1=liArr[0];
const option2=liArr[1];
const option3=liArr[2];

option1.addEventListener("click",function(){
    option1.style.backgroundColor="red";
})
option2.addEventListener("click",function(){
    //add html inside a particular tag
    option2.innerHTML=`<h1>Option2 was clicked
                        <p>Some more Html</p>
                        </h1>`
})
option3.addEventListener("click",function(){
    alert("Option3 was removed");
    //remove a particular element
    option3.remove();
})