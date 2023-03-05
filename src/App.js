import React, {useState} from "react";
import './App.css';
import Todos from "./components/todo/todos";
import NewTodo from "./components/Newtodo/NewTodo";

const dummy_todo = [
    {
        id: 'td1',
        date: new Date (2023, 2, 6),
        title: 'Study JS',
        priority: 'High'
    },
    {
        id: 'td2',
        date: new Date (2023, 11, 10),
        title: 'Do Friday things',
        priority: 'Low'
    }
]
const App = () => {

    const [todos, setTodos] = useState(dummy_todo)
    const addTodoHandler = (todos) => {
        setTodos((previousTodos) => {
            return [todos, ...previousTodos]
        })
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodoHandler}></NewTodo>
            <Todos todo={todos}></Todos>
        </div>
    )
}

export default App;
