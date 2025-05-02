import style from './TodoList.module.css'
import { TodoTask } from '../TodoTask/TodoTask';

export function TodoList({ todo, onDelete, onUpdate, onToggle }) {
    return (
        <div className={style.tasks}>
            {todo.map((task) => (
                <TodoTask
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onUpdate={onUpdate}
                    onToggle={() => onToggle(task.id)}
                />
            ))}
        </div>
    );
}