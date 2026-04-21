//TODO
//FILE FOR API REQUEST

const BASE_URL = "https://6971c97a32c6bacb12c47b89.mockapi.io/api/v2/todos";

const API = {
    // Получить все задачи
    getTodos: async () => {
        const res = await fetch(BASE_URL);
        return await res.json();
    },

    // Создать новую задачу
    createTodo: async (title) => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, completed: false })
        });
        return await res.json();
    },

    // Удалить задачу по ID
    deleteTodo: async (id) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE'
        });
        return await res.json();
    },

    // Отредактировать задачу по ID
    updateTodo: async (id, newTitle) => {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle })
        });
        return await res.json();
    }
};
export default API