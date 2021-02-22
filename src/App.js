
import { useState } from 'react';
import './App.css';

import ToDoList from './components/ToDo/todolist';
import ToDoForm from './components/ToDo/todoform';

function App() {
  const [todoList, setTodoList] = useState( () => {
    const todoList = [
      {id: 1, title: 'Gym'},
      {id: 2, title: 'Eat'},
      {id: 3, title: 'Drink'}
    ]
    return todoList;
  })
  function handleTodoClick(item){
    var index = todoList.indexOf(item);
    let newTodo =  [...todoList];
    newTodo.splice(index,1)
    setTodoList(newTodo)
  }
  function onHandleSubmit(items){
    let { title } = items;
    if(!title){
      return;
    }
    let newText = title.trim();
    if(!newText){return}
    let newToDoList =  [...todoList];
    let listId = [...todoList].map( (item) => item.id )
    let id = Math.max(...listId) + 1;      
    newToDoList.push({id:  id,title:title});
    setTodoList(newToDoList)
  }
  return (
    <div className="App">
      <h1>Welcome to react hook</h1>
      {/* <ColorBox/> */}
      <ToDoForm onSubmit={onHandleSubmit}/>
      <ToDoList  items={todoList} onClickedItem={handleTodoClick}/>
    </div>
  );
}

export default App;
