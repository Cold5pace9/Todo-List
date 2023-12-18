import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import { AiOutlineBars } from "react-icons/ai";
import withLogger from './withLogger';
import { FileUploader } from './AvatarCard';
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { Link } from 'react-router-dom';


const TodoList = () => {




    

const[value,setValue] =useState('')
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    


const filteredTask  = taskList.filter(taskObj =>{
    return taskObj.Name.toLowerCase().includes(value.toLowerCase())
})

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }






    


    const [isOpen,setOpen] =useState();




    const[theme,setTheme] = useState(localStorage.getItem('theme') || 'light')
    const changeTheme =()=>{
        if(theme==="light"){
        setTheme('dark')}
    else{
      setTheme('light')}
}
useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

    return (
        
        <>


            <header className = {`header ${theme}`}>
            <span className= {`header__logo ${theme}`}></span>
                <span  className={`header__logo ${theme}`}>To</span>
                <span className="header__logo">Do</span>
                <span className={`header__logo ${theme}`}>-</span> 
                <span className={`header__logo ${theme}`}>List</span>
                <span className={`header__logo ${theme}`}></span>
           <nav className={`header__nav ${theme} ${isOpen ? "active":"" } `}>
            <ul  className='header__nav-list'>
               <li className='header__nav-item'>
           
            <button  type="button" class="btn btn-primary" onClick = {() => setModal(true)}>Create</button>
           </li> 
      
<li className='header__nav-item'>
    <form className='search__form'>
        <input type='text'
        placeholder='search...'
        className='search__input'
        class="form-control"
        
        onChange={(event)=> setValue(event.target.value)}
        />
    </form>
</li>
<li className='header__nav-item'>
<FileUploader />

</li>
<li className='header__nav-item'>
<a class = "nav-link" href='#' onClick={changeTheme}>
    {theme === 'light'  ? <BsToggleOff />
:
<BsToggleOn />
}<p>dark</p>

</a>

    </li>

            </ul>


         



           </nav>
           <button className='header__menu-button' 
           onClick={()=>setOpen(!isOpen)}><AiOutlineBars />
           </button>
            </header>
            
          <div   className = {`task-container ${theme}`}>
               
            { filteredTask.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            <div className={`footer ${theme}`}>

            <span  className={`header__logo ${theme}`}>-</span>
            
       



            </div>


          
        </>
    );
};

const TodoListWithLogger = withLogger(TodoList);

export default TodoListWithLogger;