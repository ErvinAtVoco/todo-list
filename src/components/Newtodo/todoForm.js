import React, {useState} from "react";
import "./todoForm.css"

const TodoForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState( '')
    const [enteredPriority, setEnteredPriority] = useState( '')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const todoData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date(enteredDate)
        }
        props.onSaveTodoData(todoData)
        setEnteredTitle('')
        setEnteredPriority('')
        setEnteredDate('')
    }

    const changeAddState = (addState) => {
        props.changeAddState(addState)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-todo__controls">
                <div className="new-todo__control">
                    <label>Task</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-todo__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-todo__control">
                    <label>Priority</label>
                    <select onChange={priorityChangeHandler}>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </div>
            </div>
            <div className="new-todo__actions">
                <button type="submit">Add Task</button>
                <button onClick={() => changeAddState('Closed')}>Cancel</button>
            </div>
        </form>
    )
}

export default TodoForm