import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (inputValue !== '') {
            const newTask = {
                id: tasks.length + 1,
                name: inputValue,
                done: false
            };
            setTasks([...tasks, newTask]);
            setInputValue('');
        }
    };

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="toDoList">
            <form className="header">
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy" value={inputValue} onChange={handleInputChange}/>
                <button className="btn-add" onClick={handleAddTask}>Dodaj</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className={task.done ? 'done' : ''}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;