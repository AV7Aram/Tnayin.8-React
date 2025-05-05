import style from './TodoForm.module.css'
import { TodoFilter } from '../TodoFilter/TodoFilter';

export function TodoForm({ task, setTask, onAdd, setFilter }) {
    return (
        <div className={style.newTask}>
            <form onSubmit={onAdd}>
                <input
                    type="text"
                    placeholder="Task to be done..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <TodoFilter setFilter={setFilter}/>
                <button>Add</button>
            </form>
        </div>
    );
}