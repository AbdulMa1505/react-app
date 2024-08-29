import React, {useState} from 'react';
function ToDoList(){
    const[tasks,SetTasks]=useState(["Eat BreakFast","Take a Shower", "Walk the Dog"]);
    const[newTask,SetNewTask]=useState("");
    const HandleInputChange=(event)=>{
        SetNewTask(event.target.value);
    }
const addTask=()=>{
   if(newTask.trim() !==""){
    SetTasks(n=>([...n,newTask]))
    SetNewTask("");
   }

}
const deleteTask=(index)=>{
    SetTasks(tasks.filter((_,i)=>(i!==index)));


}
const moveTaskUp=(index)=>{
    if(index>0){
        const UpdatedTask =[...tasks];
        [UpdatedTask[index],UpdatedTask[index-1]]=
        [UpdatedTask[index-1],UpdatedTask[index]]; 
        SetTasks(UpdatedTask);
    }

}
const moveTaskDown=(index)=>{
    if(index< tasks.length-1){
        const UpdatedTask =[...tasks];
        [UpdatedTask[index],UpdatedTask[index+1]]=
        [UpdatedTask[index+1],UpdatedTask[index]]; 
        SetTasks(UpdatedTask);
    }

}
   return(
        <>
            <div className="ToDoList">
                <h1>To Do List</h1>
                <div>
                    <input type="text" placeholder='enter a task..' value={newTask} onChange={HandleInputChange}/>
                    <button class='AddBtn' onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task,index)=>
                    <li key={index}><span className="text">{task}</span>
                    <button class="delBtn" onClick={()=>deleteTask(index)}>Delete</button>
                    <button class="UpBtn" onClick={()=>moveTaskUp(index)}>☝️</button>
                    <button class="DownBtn" onClick={()=>moveTaskDown(index)}>⬇👇</button>
                    </li>
                )}
                </ol>
            </div>
        </>
    );
}
export default ToDoList