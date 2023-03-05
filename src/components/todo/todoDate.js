
const TodoDate = (props) => {
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year = props.date.getFullYear()

    return (
        <div className="todo-date">
            <div className="">{month} {day} {year}</div>
        </div>
    )
}

export default TodoDate