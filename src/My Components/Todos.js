import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin:"40px auto"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="my-3">Todo's List</h3>
      {props.todo.length===0?"No Todo's to display.":
       props.todo.map((todo)=>{
        return (<TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>)
      })
      } 
    </div>
  )
}
