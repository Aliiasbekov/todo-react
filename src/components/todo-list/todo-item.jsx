import {CustomButton} from "../button/index.jsx";

export function TodoItem ({todoTitle, setTodos}) {

    const handleDelete = () => {
        setTodos((prev) => prev.filter(el => el !== todoTitle))
    }

    const handleEdit = () => {

    }


    return (
        <div
            className="text-md w-full bg-gray-700
            rounded-md p-2 text-white font-normal
            flex justify-between">
            <p>{todoTitle}</p>
            <div className="flex gap-2">
                <CustomButton variant="reset" handleClick={handleDelete} title="DEL"/>
                <CustomButton handleClick={handleEdit} title="EDIT"/>
            </div>
        </div>
    )
}
