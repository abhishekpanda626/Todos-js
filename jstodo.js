let task_records=[];
let task_name;
let update_task;
window.onload=showData;
function validateForm() {
    let x = document.getElementById("task_name").value;
    if (x == "") {
      document.getElementById("error").innerHTML="Must be filled out..";
      return false;
    }
    else
    {
    document.getElementById("error").innerHTML="";
    saveData();
  
    }
  }
function saveData()
{
  task_name=document.getElementById("task_name").value;
//let task_records=new Array();
task_records=JSON.parse(localStorage.getItem("toDoList"))?JSON.parse(localStorage.getItem("toDoList")):[]
if(task_records.some((v)=>{return v.task_name==task_name}))
{
  document.getElementById("error").innerHTML="duplicate data";
}
else
{
  task_records.push({
  "task_name":task_name,
  "status":'0',
})
localStorage.setItem("toDoList",JSON.stringify(task_records));
}
showData();
}

function showData()
{
  document.getElementById("task_name").value="";
  document.getElementById("showUsers").innerHTML="";
  //let task_records=new Array();
task_records=JSON.parse(localStorage.getItem("toDoList"))?JSON.parse(localStorage.getItem("toDoList")):[]
  if(task_records)
  {
    for(let i=0;i<task_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  let status=task_records[i].status=="1"?true:false;
  if(status)
  {
    addDiv.innerHTML='  <div class="col-sm-12" style="padding: 10px;color:red; text-decoration:line-through;"><input type="checkbox" checked disabled /> <label id="items">'+task_records[i].task_name+'</label> <button class="btn btn-primary" onclick="deleteData('+i+')">Delete</button></div>';

  }
  else
  {
    addDiv.innerHTML='  <div class="col-sm-12" style="padding: 10px;color:blue;"><input type="checkbox" disabled /> '+task_records[i].task_name+' <button class="btn btn-primary" onclick="deleteData('+i+')">Delete</button> <button class="btn btn-success" onclick="setStatus('+i+',1)">Mark Complete</button><button id="edit_btn" class="btn btn-primary" onclick="editData('+i+')">EDIT</button></div>';

  }
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }
  function setStatus(index,status_type)
  {
    let task_records=new Array();
task_records=JSON.parse(localStorage.getItem("toDoList"))?JSON.parse(localStorage.getItem("toDoList")):[]
task_records[index].status=status_type;
localStorage.setItem("toDoList",JSON.stringify(task_records));

showData();
  }
         function deleteData(index)
         {
          let task_records=new Array();
task_records=JSON.parse(localStorage.getItem("toDoList"))?JSON.parse(localStorage.getItem("toDoList")):[]
task_records.splice(index,1)
localStorage.setItem("toDoList",JSON.stringify(task_records));
this.showData();
         }

    function clearData()
         {
           window.localStorage.clear();
           this.showData();
         }

var count;
 function editData(index){
  document.getElementById("update_btn").style.display="flex";
   update_task=task_records[index].task_name;
  document.getElementById("task_name").value=update_task;
 count=index;
  }  
 function updatedData()
  {
    //let task_name;
let task_new=document.getElementById("task_name").value;
//let task_records=new Array();
let task;

task=JSON.parse(localStorage.getItem("toDoList"));
/*for(var i=0;i<=localStorage.length;i++)
{
  if(task[i]==update_task)
  {
    task_records.push({
      "task_name":task_new,
      "status":'0',});
  }
  
  console.log(task_records[i]);
}*/
task_records.splice(count,1);
task_records.push({
  "task_name":task_new,
  "status":'0',});
  localStorage.setItem("toDoList",JSON.stringify(task_records));
console.log(update_task);
console.log(task_new);
document.getElementById("update_btn").style.display="none";
showData();
  }     