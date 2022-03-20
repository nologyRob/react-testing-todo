import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter(props) {

  const {numberOfIncompleteTasks} = props;

    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
        </div>
    )
}

export default TodoFooter