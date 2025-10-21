
import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();// by default on submit react makes a post request and reloads the page
        console.log("Form submitted", input);
        if(!input.trim()) return;
        // call the onSubmit prop function here to add the todo
        onSubmit(input)
        setInput("") 
    }

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="what need to be done?"
            className="rounded-s-md grow border border-gray-400 p-2" />
            <button type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-green-800"
            >Add</button>
        </form>
    )
}      