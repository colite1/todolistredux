import {useState} from 'react';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
function App() {


  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP</h1>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      
    </div>
  );
}

export default App;
