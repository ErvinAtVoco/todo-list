import React, {useState} from "react"
import TodoForm from "./todoForm";
import "./NewTodo.css"
const NewTodo = (props) => {
    const saveTodoDatahandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        }
        props.onAddTodo(todoData)
    }
    const [state, setState] = useState('Closed')

    const changeAddState = (addState) => {
        setState(addState)
        return state
    }

    return (
        <div className="new-todo">
            {state === 'Closed' && <button onClick={() => changeAddState('Open')}>Add new task</button>}
            {state === 'Open' && <TodoForm onSaveTodoData={saveTodoDatahandler} changeAddState={changeAddState}></TodoForm>}
        </div>
    )
 }

 export default NewTodo