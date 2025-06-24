import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import DisplayTasks from './components/DisplayTasks'


function App() {
  const [taskList, setTaskList] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  console.log("taskList", taskList)
  useEffect(()=>{
    const tasks = localStorage.getItem("taskList")
    if(tasks){
      setTaskList(JSON.parse(tasks))
    }
  },[])
  useEffect(()=>{
    if(taskList.length > 0){
      localStorage.setItem("taskList", JSON.stringify(taskList))
    }
  },[taskList])
    return (
   <div>
    <h1>Hello World</h1>
    <Navbar onSearch = {setSearchQuery}/>
    <AddTask taskList={taskList}setTaskList={setTaskList}/>
    <DisplayTasks taskList={taskList} searchResults = {searchQuery}/>
   </div>
  )
}

export default App
