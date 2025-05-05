import { useState } from "react";
import { TaskText } from "../TaskText/TaskText";
import { TaskActions } from "../TaskActions/TaskActions";
import style from "./TodoTask.module.css";

export function TodoTask({ task, onDelete, onUpdate, onToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.task);

    const handleEdit = () => {
        if (isEditing) {
            onUpdate(task.id, editText);
        }
        setIsEditing(!isEditing);
    };

    const handleBlurOrEnter = (e) => {
        if (e.type === "blur" || (e.key === "Enter" && editText.trim())) {
            onUpdate(task.id, editText);
            setIsEditing(false);
        }
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const handleDoubleClick = () => {
        setIsEditing(true);
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
            <TaskText
                task={task}
                isEditing={isEditing}
                editText={editText}
                setEditText={setEditText}
                onBlurOrEnter={handleBlurOrEnter}
                onDoubleClick={handleDoubleClick}
            />
            <TaskActions
                isEditing={isEditing}
                onEdit={handleEdit}
                onDelete={onDelete}
            />
        </div>
    );
}
