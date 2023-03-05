import React from 'react';
import "./todoFilter.css"

const TodoFilter = (props) => {
    const priorityChangeHandler = event => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className="todo-filter">
            <div className="todo-filter__control">
                <label>Filter by priority</label>
                <select value={props.selected} onChange={priorityChangeHandler}>
                    <option value='All'>All</option>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
            </div>
        </div>
    )
}

export default TodoFilter