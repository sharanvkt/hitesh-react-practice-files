import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoString] =useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(todoString===""){
            return alert("enter a task buddy!!")
        }
        const todo ={
            todoString, 
            id:v4()
        }
        //TODO:
        addTodos(todo)
        setTodoString("")

    }


    

  return(
      <Form onSubmit={handleSubmit}>
          <FormGroup>
              <InputGroup>
                  <Input
                      type="text"
                      name="Todo"
                      id="todo"
                      placeholder="Enter a task"
                      value={todoString}
                      onChange={e=>setTodoString(e.target.value)}
                  />

                  <Button 
                  color="success"
                  >Add Todo</Button>

                 
              </InputGroup>
          </FormGroup>
      </Form>
  )
};

export default TodoForm;
