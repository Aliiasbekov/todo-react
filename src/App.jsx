import {TodoForm} from "./components/form/index.jsx";
import {TodoList} from "./components/todo-list/index.jsx";
import {useEffect, useState} from "react";

function App() {
    const [todos, setTodos] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const data = localStorage.getItem("todos")
        setTodos(JSON.parse(data || "[]"))
    }, [refresh]);

  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gray-500">
        <button onClick={() => setRefresh(prev => !prev)}>
            refresh
        </button>
        <div className="w-6/12">
            <TodoForm todos={todos} setTodos={setTodos}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    </section>
  )
}

export default App
