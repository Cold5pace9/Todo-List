import React from 'react';

const Header = () => {
    return (
        <>

            <header className = "header">
            <span className='header__logo'></span>
                <span  className='header__logo'>To</span>
                <span className='header__logo'>Do</span>
                <span className='header__logo'>-</span> 
                <span className='header__logo'>List</span>
                <span className='header__logo'></span>

       


           <nav className={`header__nav ${isOpen ? "active":""} `}>
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

 
       

            </ul>


         








           </nav>
           <button className='header__menu-button'
           onClick={()=>setOpen(!isOpen)}><AiOutlineBars />
           </button>
            </header>
            
            <div className = "task-container">
               
            { filteredTask.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
            <div className='footer'>

            <span  className='header__logo'>-</span>
            
       



      







            </div>


          
        </>
    );
};

export default Header;