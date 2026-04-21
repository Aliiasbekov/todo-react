import {TodoItem} from "./todo-item.jsx";


export function TodoList ({todos, setTodos}) {


    return (
        <div className="flex flex-col gap-2 p-5 bg-gray-400 rounded-md">
            {todos.map(todo => (
                <TodoItem key={todo.id} setTodos={setTodos} todo={todo}/>
            ))}
        </div>
    )
}