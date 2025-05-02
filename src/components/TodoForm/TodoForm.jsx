import style from './TodoForm.module.css'

export function TodoForm({ task, setTask, onAdd }) {
    return (
        <div className={style.newTask}>
            <form onSubmit={onAdd}>
                <input
                    type="text"
                    placeholder="Task to be done..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}