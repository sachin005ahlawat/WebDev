const input=document.querySelector("input");
const form=document.querySelector("form");
const ul=document.querySelector("ul");

(function getTaskFromLS(){
  if(localStorage.getItem("TaskList")!=null){
    const taskArr=JSON.parse(localStorage.getItem("TaskList"));
    for(let i=0;i<taskArr.length;i++){
      addOneTask(taskArr[i]);
    }
  }
})()


function addOneTask(task){
  const li=document.createElement("li");
  li.setAttribute("class","task");
  li.innerHTML=`<p class="mr-4">${task}</p>   
  <img alt="cross" src="cross.png">`
  ul.appendChild(li);
  const img=li.querySelector("img");
  img.addEventListener("click",removeTask);
}



form.addEventListener("submit",function(e){
  e.preventDefault(); //stops reloading of page again and again
  const task=input.value
  addOneTask(task);
  
  //addTaskToLocalStorage
  addTaskToLS(task);
  input.value="";
});

function addTaskToLS(task){
  if(localStorage.getItem("TaskList")==null){
    const TaskList=[task];
    localStorage.setItem("TaskList",JSON.stringify(TaskList));
  }
  else{
    const sTaskList=localStorage.getItem("TaskList");
    const TaskList=JSON.parse(sTaskList);
    TaskList.push(task);
    localStorage.setItem("TaskList",JSON.stringify(TaskList));
  }
};

function removeTaskFromLS(task){
  const sTaskList=localStorage.getItem("TaskList");
  const TaskList=JSON.parse(sTaskList);
  for(var i=0;i<TaskList.length;i++){
    if(TaskList[i]==task){
      TaskList.splice(i,1);
      localStorage.setItem("TaskList",JSON.stringify(TaskList));
      break;
    }
  }
}

function removeTask(e){
  const task1=e.target.parentElement.firstChild.textContent;
  const task=task1.trim();
  removeTaskFromLS(task);
  e.target.parentElement.remove();
}


// var close = document.getElementsByTagName("img");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var di = this.parentElement;
//     var div = di.parentElement;
//     div.style.display = "none";
//   }
// }