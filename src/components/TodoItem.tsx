
import {Trash2 } from "lucide-react";
import type { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {

    return (
        <div className="flex justify-between items-center gap-5">
            <label className="flex items-center gap-3 border rounded-md p-2 border-gray-300 bg-white
             hover:bg-slate-50 grow" >
                <input className="scale-125" type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-slate-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button onClick={()=>onDelete(todo.id)}
            className="p-2">
                <Trash2 size={20} className="text-gray-500"/>
            </button>
        </div >
    )
}