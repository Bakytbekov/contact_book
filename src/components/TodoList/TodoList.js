import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { todoContext } from "../../contexts/TodoContext";
import "./TodoList.css";

const TodoList = () => {
    const { todos, getTodosData, deleteTask, editTodo } = useContext(
        todoContext
    );

    useEffect(() => {
        getTodosData();
    }, []);

    return (
        <div className="list">
            {todos.map((item) => (
                <ul key={item.id}>
                    <li>
                        <span>name: </span>
                        {item.name}
                    </li>
                    <li>
                        <span>Surname: </span>
                        {item.surname}
                    </li>
                    <li>
                        <span>number: </span>
                        {item.number}
                    </li>
                    <li>
                        <span>Email: </span>
                        {item.Email}
                    </li>
                    <li>
                        <img
                            className="list_img"
                            key={item.id}
                            src={item.image}
                        />
                    </li>
                    <button
                        className="list_btn"
                        onClick={() => deleteTask(item.id)}
                    >
                        Delete
                    </button>
                    <Link to="/edit">
                        <button
                            className="list_btn"
                            onClick={() => editTodo(item.id)}
                        >
                            Edit
                        </button>
                    </Link>
                </ul>
            ))}
        </div>
    );
};

export default TodoList;
