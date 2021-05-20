import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./EditTodo.css";

const EditTodo = (props) => {
    const { taskToEdit, saveTask } = useContext(todoContext);
    const [newEditItem, setNewEditItem] = useState();

    useEffect(() => {
        setNewEditItem(taskToEdit);
    }, [taskToEdit]);

    function handleEditInput(e) {
        let newTask = {
            ...newEditItem,
            [e.target.name]: e.target.value,
            [e.target.surname]: e.target.value,
            [e.target.number]: e.target.value,
            [e.target.Email]: e.target.value,
            [e.target.image]: e.target.value,
        };
        setNewEditItem(newTask);
    }

    return (
        <div className="container">
            {newEditItem ? (
                <>
                    <input
                        className="inp"
                        name="name"
                        onChange={handleEditInput}
                        value={newEditItem.name}
                        type="text"
                    />

                    <input
                        className="inp"
                        name="surname"
                        onChange={handleEditInput}
                        value={newEditItem.surname}
                        type="text"
                    />

                    <input
                        className="inp"
                        name="number"
                        onChange={handleEditInput}
                        value={newEditItem.number}
                        type="number"
                    />

                    <input
                        className="inp"
                        name="Email"
                        onChange={handleEditInput}
                        value={newEditItem.Email}
                        type="text"
                    />

                    <input
                        className="inp"
                        name="image"
                        onChange={handleEditInput}
                        value={newEditItem.image}
                        type="text"
                    />
                    <button
                        className="btn"
                        onClick={() => saveTask(newEditItem, props.history)}
                    >
                        Save Contact
                    </button>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default EditTodo;
