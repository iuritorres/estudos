import todoLogo from '../../assets/todo_logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ onAddTask }) {
    const [ title, setTitle ] = useState('');

    // Add task in tasks array after submit
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    };

    // Change task title onChange the input
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    // Component Return
    return (
        <header className={styles.header} >
            <img src={todoLogo} alt="todo_logo" tooltip="Our Logo" />

            <form onSubmit={handleSubmit} className={styles.newTaskForm} >
                <input required placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle} id="inputTask" />
                
                <button>
                    Create
                    <AiOutlinePlusCircle size={20} className={styles.reactAddIcon} />
                </button>
            </form>
        </header>
    )
}

