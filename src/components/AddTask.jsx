import React,{useEffect, useState} from 'react'
import './AddTask.css'

const AddTask = ({taskList,setTaskList}) => {
    const [task, setTask] = useState("")
    const handleAddTask = () =>{
        if(task){
            setTaskList((prevList)=>[...prevList, task])
            setTask("")
            // localStorage.setItem("taskList", JSON.stringify(prevList=>[...prevList, task]))
            
          }
          }
          // console.log(taskList)
  return (
    <div className='add-task'>
      <h2 style={{color:"white",fontFamily:"Algerian"}}>Add Task</h2>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/> 
      {task?<button className='btn btn-danger' onClick={handleAddTask}>Add</button>:""}
    </div>
  )
}

export default AddTask
