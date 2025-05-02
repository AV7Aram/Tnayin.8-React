import { useState } from "react"
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import style from './TodoTask.module.css'

export function TodoTask({ task, onDelete, onUpdate, onToggle }) {
    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(task.task);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || (e.key === "Enter" && editText.trim())) {
            onUpdate(task.id, editText);
            setEditing(false);
        }
        if (e.key === "Enter") e.preventDefault();
    };

    return (
        <div
            className={style.task}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggle}
            />
            {editing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleBlurOrEnter}
                    onKeyDown={handleBlurOrEnter}
                    style={{ flexGrow: 1 }}
                />
            ) : (
                <span className={style.taskName}>{task.task}</span>
            )}
            <button className={style.edit} onClick={handleEdit}>
                <FaRegEdit />
            </button>
            <button className={style.delete} onClick={onDelete}>
                <FaRegTrashAlt />
            </button>
        </div>
    );
}
