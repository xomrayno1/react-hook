import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func    
};
ToDoForm.defaultProps = {
    onSubmit: null
}

function ToDoForm(props) { 
    const { onSubmit } = props
    const [value, setValue] = useState('');
     
    function handleOnChangeInput(event){      
        setValue(event.target.value);
    }
    function onHandleSubmit(event){
        event.preventDefault();
         
        if(!onSubmit) return ; 

        const form = {
            title: value
        }
        onSubmit(form)
        setValue('');
         
    }
    return (
        <div>
             
                <form onSubmit={onHandleSubmit}>
                    <input onChange={handleOnChangeInput}
                                value={value}      
                                type='text' placeholder='Nhập ....'/>
                </form>
           
        </div>
    );
}

export default ToDoForm;