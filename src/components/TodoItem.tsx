
import type { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {

    return (
        <div>
            <label className="flex items-center gap-3 border rounded-md p-2 border-gray-300 bg-white hover:bg-slate-50">
                <input className="scale-125" type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-slate-400" : ""}>
                    {todo.title}
                </span>
            </label>
        </div >
    )
}