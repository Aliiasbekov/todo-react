import {CustomButton} from "../button/index.jsx";
import { useState } from "react";
import API from "../../api/todo.js";

export function TodoItem ({todo, setTodos}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleDelete = async () => {
        await API.deleteTodo(todo.id);
        setTodos(prev => prev.filter(el => el.id !== todo.id));
    };

    const handleEdit = async () => {
        const updated = await API.updateTodo(todo.id, newTitle);
        setTodos(prev =>
            prev.map(el => el.id === todo.id ? updated : el)
        );
        setIsEditing(false);
    };

    return (
        <div
            className="text-md w-full bg-gray-700
            rounded-md p-2 text-white font-normal
            flex justify-between items-center">
            {isEditing ? (
                <input
                    className="bg-gray-600 text-white border-none outline-none rounded px-1 flex-1 mr-2"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    autoFocus
                />
            ) : (
                <p>{todo.title}</p>
            )}
            <div className="flex gap-2">
                {isEditing ? (
                    <CustomButton variant="submit" handleClick={handleEdit} title="SAVE" />
                ) : (
                    <>
                        <CustomButton variant="reset" handleClick={handleDelete} title="DEL" />
                        <CustomButton variant="edit" handleClick={() => setIsEditing(true)} title="EDIT" />
                    </>
                )}
            </div>
        </div>
    )
}
