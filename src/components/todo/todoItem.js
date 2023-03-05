import TodoDate from "./todoDate";
import Card from "../UI/Card"
import './todoItem.css'
const TodoItem = (props) => {

    return (
        <Card className="todo-item">
            <TodoDate date={props.date}></TodoDate>
            <div className="todo-item__description">
                <h2>{props.title}</h2>
                <div className="todo-item__priority">{props.priority}</div>
            </div>
        </Card>
    )
}

export default TodoItem