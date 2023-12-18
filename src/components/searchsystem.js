import React from 'react';

const searchsystem = () => {
    const filteredTask  = taskList.filter(taskObj =>{
        return taskObj.Name.toLowerCase().includes(value.toLowerCase())
    })
    
    return (
        <div>
             <form className='search__form'>
        <input type='text'
        placeholder='search...'
        className='search__input'
        class="form-control"
        
        onChange={(event)=> setValue(event.target.value)}
        />
    </form>
        </div>
    );
};

export default searchsystem;