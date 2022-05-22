import './App.css';
import Header from "./My Components/Header";
import {AddTodo} from "./My Components/AddTodo";
import {Todos} from "./My Components/Todos";
import {About} from "./My Components/About";
import {Footer} from "./My Components/Footer";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  //Add function
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0)
    {
      sno=0;
    }
    else
    {
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    
    setTodos([...todos,myTodo]);
    console.log(myTodo);  
  }

  // Delete function 
  const onDelete=(todo)=>{
    
    setTodos(todos.filter((e)=>{
      return (e!==todo);
    }));
    localStorage.getItem("todos");
  }
  const [todos,setTodos]=useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Router>
      <Header title="Todo's List" searchBar={false}/>
      <Routes>
          <Route exact path="/" element={
            <>
          <AddTodo addTodo={addTodo}/>
          <Todos todo={todos} onDelete={onDelete}/>
            </>}
           >
          </Route>
          <Route exact element={<About/>}>
            
          </Route>
      </Routes>
      
      <Footer/>
    </Router>
    </>

  );
}

export default App;
