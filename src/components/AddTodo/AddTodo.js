import React, { useContext, useEffect, useState } from "react";
import { todoContext } from "../../contexts/TodoContext";
import "./AddTodo.css";

const AddTodo = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [search, setSeacrh] = useState("");
    const { AddTask, getSearch } = useContext(todoContext);

    function handleClick() {
        let newObj = {
            name: name,
            surname: surname,
            number: number,
            Email: Email,
            image: image,
        };
        AddTask(newObj);
        setName("");
        setSurname("");
        setNumber("");
        setEmail("");
        setImage("");
    }

    function handleSearch(e) {
        setSeacrh(e.target.value);
    }

    useEffect(() => {
        getSearch(search);
    }, [search]);

    return (
        <div className="container">
            <input
                className="inp"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="name"
            />
            <input
                className="inp"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="surname"
            />
            <input
                className="inp"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Phone number"
            />
            <input
                className="inp"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <input
                className="inp"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="image"
            />
            <input
                className="inp"
                type="text"
                placeholder="seacrh"
                onChange={handleSearch}
            />
            <div>
                <button className="btn" onClick={handleClick}>
                    Add Contact
                </button>
            </div>
        </div>
    );
};

export default AddTodo;
