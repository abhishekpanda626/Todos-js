var mytodo_list=new Array();
function validateForm() {
  let x = document.getElementById("add-task").value;
  if (x == "") {
    document.getElementById("error").innerHTML="Must be filled out..";
    x.focus();
    return false;
  }
  CreateTask();
}
    function CreateTask()
    {  
         var task=document.getElementById("add-task").value;
         mytodo_list.push(task);
         ReadAllTask();
    }
    
    function ReadAllTask()
    {
        var data='';
    for(var i=0;i<mytodo_list.length;i++)
    {
        data+='<tr>';
        data+='<td>' + mytodo_list[i] + '</td>';
        data+='<td><button onclick=UpdateTask(' +i+ ')>Update</button></td>';
        data+='<td><button onclick=DeleteTask('+i+')>Delete</button></td>';
        data+='</tr>';
    }
    storeData();
    document.getElementById("counter").innerHTML=mytodo_list.length +" Task";
    document.getElementById("mytodo-tasks").innerHTML=data;
    }
    ReadAllTask();
    function UpdateTask(item)
    {
    document.getElementById("UpdateForm").style.display='block';
    document.getElementById("update-task").value=mytodo_list[item];
    document.getElementById("UpdateForm").onsubmit=function()
    {
        var task=document.getElementById("update-task").value;
        mytodo_list.splice(item,1,task.trim());
    
        ReadAllTask();
        CloseInput();
    }
    
    }
    function DeleteTask(item)
    {   window.localStorage.removeItem(item);
        mytodo_list.splice(item,1);
        ReadAllTask();
    }
    
    function CloseInput()
    {
        document.getElementById("UpdateForm").style.display='none';
    }   

function storeData(){
    var data='';
    for(var i=0;i<mytodo_list.length;i++)
    {
        window.localStorage.setItem(i,JSON.stringify(mytodo_list[i]))
    }
}