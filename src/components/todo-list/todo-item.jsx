import {CustomButton} from "../button/index.jsx";
import { useState } from "react";

export function TodoItem ({todoTitle, setTodos}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todoTitle);

    const handleDelete = () => {
        setTodos((prev) =>  prev.filter(el => el !== todoTitle))
    }

    const handleEdit = () => {
        setTodos((prev) => prev.map(el => (el === todoTitle ? newTitle : el)))
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
                <p>{todoTitle}</p>
            )}
            <div className="flex gap-2">
                {isEditing ? (
                    // Кнопка сохранения, когда в режиме редактирования
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
