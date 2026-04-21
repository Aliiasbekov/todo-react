import {TodoForm} from "./components/form/index.jsx";
import {TodoList} from "./components/todo-list/index.jsx";
import {useEffect, useState} from "react";
import API from "./api/todo.js";

function App() {
    const [todos, setTodos] = useState([])

    const fetchTodos = async () => {
        const data = await API.getTodos();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

  return (
    <section className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center gap-5
    bg-gray-500">
        <button onClick={fetchTodos}
        className="mt-3 bg-purple-500 border-none rounded-md p-4 text-md text-white
            hover:bg-purple-700 cursor-pointer transition duration-300 ease-in-out">
            REFRESH
        </button>
        <div className="w-6/12 mb-3">
            <TodoForm setTodos={setTodos}/>
            <TodoList setTodos={setTodos} todos={todos}/>
        </div>
    </section>
  )
}

export default App
