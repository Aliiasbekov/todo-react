import {TodoForm} from "./components/form/index.jsx";
import {TodoList} from "./components/todo-list/index.jsx";
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState(() => {
        const data = localStorage.getItem("todos");
        return JSON.parse(data || "[]");
    });
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    useEffect(() => {
        const data = localStorage.getItem("todos")
        setTodos(JSON.parse(data || "[]"))
    }, [refresh]);

  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center gap-5
    bg-gray-500">
        <button onClick={() => setRefresh(prev => !prev)}
        className="bg-purple-500 border-none rounded-md p-4 text-md text-white
            hover:bg-purple-700 cursor-pointer transition duration-300 ease-in-out">
            REFRESH
        </button>
        <div className="w-6/12">
            <TodoForm todos={todos} setTodos={setTodos}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    </section>
  )
}

export default App
