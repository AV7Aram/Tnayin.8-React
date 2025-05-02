import { TodoForm } from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList/TodoList";
import style from './TodoContainer.module.css'

export function TodoContainer({
    task,
    setTask,
    todo,
    onAdd,
    onDelete,
    onUpdate,
    onToggle,
}) {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <TodoForm task={task} setTask={setTask} onAdd={onAdd} />
                <TodoList
                    todo={todo}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onToggle={onToggle}
                />
            </div>
        </div>
    );
}
