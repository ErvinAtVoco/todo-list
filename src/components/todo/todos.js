import React, {useState} from "react";
import Card from "../UI/Card";
import "../UI/Card.css"
import TodoItem from "./todoItem";
import './todos.css'
import TodoFilter from "./todoFilter";

const Todos = (props) => {
    const [filteredPriority, setFilteredPriority] = useState('All')

    const filterChangeHandler = (selectedPriority) => {
        setFilteredPriority(selectedPriority)
    }

    const filteredTodos = props.todo.filter((todo) => {
        return todo.priority === filteredPriority
    })

    return (
        <Card className="todos">
            <TodoFilter selected={filteredPriority} onChangeFilter={filterChangeHandler}></TodoFilter>
            {filteredPriority === 'All' && props.todo.map((todo) => {
                return <TodoItem key={todo.id} title={todo.title} date={todo.date} priority={todo.priority}></TodoItem>
            })}
            {filteredTodos.length > 0 &&
                filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} title={todo.title} date={todo.date} priority={todo.priority}></TodoItem>
                })
            }

        </Card>
    );

}

export default Todos