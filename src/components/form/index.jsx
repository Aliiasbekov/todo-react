import {CustomButton} from "../button/index.jsx";
import {useState} from "react";

const styles = "border-1 border-white rounded-md px-4 py-2 text-md text-white"

export function TodoForm ({setTodos, todos}) {
    const [inputValue, setInputValue] = useState("")

    const handleSave = async (event) => {
        event.preventDefault()
        if(inputValue.length > 0){
            setTodos(prev => [inputValue, ...prev])
            localStorage.setItem("todos", JSON.stringify([...todos, inputValue]))
        }
    }

    return (
        <form
            className="flex gap-2 mb-2 w-full"
        >
            <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className={`${styles} flex-1`}
                type="text"/>
            <CustomButton variant="submit" handleClick={handleSave} title="SAVE"/>
        </form>
    )
}
