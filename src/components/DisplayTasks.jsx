import React, { useEffect, useState } from 'react'
import "./DisplayTasks.css"
const DisplayTasks = ({taskList,searchResults}) => {
  const [editedTask, setEditedTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const handleDelete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    window.location.reload();
  }
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(taskList[index]);

  }
  const handleSave = () => {
    const updatedTasks = [...taskList];
    updatedTasks[editingIndex] = editedTask
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    window.location.reload();
    setEditingIndex(null);
    setEditedTask("");

  }
  const handleCancel = () => {
    setEditingIndex(null);
    setEditedTask("");

  }
  const tasksToRender = searchResults ? taskList.filter(task=>{
    return task.includes(searchResults)
  }): taskList;

return (
    <div className="display-tasks">
      {tasksToRender.length > 0 ? (
        tasksToRender.map((task, index) => (
          <div className="task-row" key={index}>
            <h3 className="my-task">{task}</h3>
            <button className="my-btn" onClick={()=>handleEdit(index)}>✏️</button>
            {editingIndex === index?(
              <>
              <input type='text' value={editedTask}onChange={(e)=>setEditedTask(e.target.value)}></input>
              <button className='my-btn' onClick={()=>handleSave()}>✅</button>
              <button className='my-btn' onClick={()=>handleCancel()}>❌</button>
              </>
            ):''}
            <button className="my-btn" onClick={() => handleDelete(index)}>🗑️</button>
          </div>
        ))
      ) : (
        ""
      )}
    </div>
)


}

export default DisplayTasks
