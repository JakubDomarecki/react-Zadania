import React, {useState} from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const AddTask = () => {
      setTasks(state=> [...state, `Zadanie ${tasks.length + 1}`]);
    };

    return (
        <>
            <button onClick={AddTask}>Dodaj zadanie</button>
            <ul>{tasks.map((task, index) => <li key={index}>{task}</li>)}</ul>
        </>

    );
};
export default ToDoList;