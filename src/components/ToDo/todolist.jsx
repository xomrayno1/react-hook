import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
    items : PropTypes.array,
    onClickedItem: PropTypes.func
};
ToDoList.defaultProps = {
    items: [],
    onClickedItem: null
}

function ToDoList(props) {
    const { items,onClickedItem } =  props;
    return (
        <div>
            <ul>
                {
                items.map((item,index) => {
                   return <li key={index} onClick={()=> onClickedItem(item) }>{item.title}</li>
                 } )
                }
            </ul>
        </div>
    );
}

export default ToDoList;