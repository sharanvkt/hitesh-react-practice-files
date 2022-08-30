import React,{useState, useEffect} from 'react'

import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from './Components/Todos'  
import TodoForm from './Components/TodoForm'

const App = () => {

  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const localTodos =localStorage.getItem("todos")

    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const markComeplete =id =>{

    setTodos(todos.filter(todo=> todo.id !== id))
  }


  const addTodos= async todo =>{
    setTodos([...todos, todo])
  }

  return (
    <Container>
      <h1> 
         Todo With local storage
      </h1>
      <Todos todos={todos}  markComeplete ={markComeplete} />
      <TodoForm addTodos={addTodos}/>

    </Container>
  )
}

export default App