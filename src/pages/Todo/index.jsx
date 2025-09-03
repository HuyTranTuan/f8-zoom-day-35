import { useState } from "react";

function Todo() {
    const todoLocal = JSON.parse(localStorage.getItem("todosReact"));
    const [todoID, setTodoID] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [cardColor, setCardColor] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [todos, setTodos] = useState(
        todoLocal ? todoLocal : []
    );
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptonChange = (e) => {
        setDescription(e.target.value);
    }
    const handleCardColorChange = (e) => {
        setCardColor(e.target.value);
    }
    const handleStatusChange = (e) => {
        setIsCompleted(e.target.checked);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoID.trim()) {
            const todoItem = todos.find(item => item.id === todoID);
            const todoItems = todos.filter(item => item.id !== todoID);
            localStorage.setItem("todosReact", JSON.stringify([...todoItems, {
                id: todoItem.id,
                title: escapeHTML(title),
                description: escapeHTML(description),
                cardColor: cardColor,
                isCompleted: isCompleted
            }]))
            setTodos([...todoItems, {
                id: todoItem.id,
                title: escapeHTML(title),
                description: escapeHTML(description),
                cardColor: cardColor,
                isCompleted: isCompleted
            }]);
            setTitle("");
            setDescription("");
            setCardColor("");
            setIsCompleted(false);
            setTodoID("");
            document.querySelector(".todo-form").reset();
        } else {
            localStorage.setItem("todosReact", JSON.stringify([...todos, {
                id: 'id' + (new Date()).getTime(),
                title: escapeHTML(title),
                description: escapeHTML(description),
                cardColor: cardColor,
                isCompleted: isCompleted
            }]))
            setTodos([...todos, {
                id: 'id' + (new Date()).getTime(),
                title: escapeHTML(title),
                description: escapeHTML(description),
                cardColor: cardColor,
                isCompleted: isCompleted
            }]);
            setTitle("");
            setDescription("");
            setCardColor("");
            setIsCompleted(false);
            document.querySelector(".todo-form").reset();
        }
    }

    const handleDelete = (id) => {
        const todoItems = todos.filter(item => item.id !== id);
        localStorage.setItem("todosReact", JSON.stringify(todoItems))
        setTodos(todoItems);
    }
    const handleEdit = (id) => {
        const todoItem = todos.find(item => item.id === id);
        const title = document.querySelector("#taskTitle");
        const description = document.querySelector("#taskDescription");
        const cardColor = document.querySelector("#taskColor");
        const isCompleted = document.querySelector("#taskCompleted");

        title.value = todoItem.title;
        description.value = todoItem.description;
        cardColor.value = todoItem.cardColor;
        isCompleted.checked = todoItem.isCompleted;

        setTitle(title.value);
        setDescription(description.value);
        setCardColor(cardColor.value);
        setIsCompleted(isCompleted.checked);
        setTodoID(todoItem.id);
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (m) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            })[m];
        });
    }

    return (
        <div className="todo-container">
            <form className="todo-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="taskTitle">Task Title</label>
                    <input type="text" id="taskTitle" className="form-input" placeholder="Enter task title" required onInput={handleTitleChange} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="taskDescription">Description</label>
                    <textarea id="taskDescription" className="form-textarea"
                        placeholder="Enter task description" onInput={handleDescriptonChange}></textarea>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="taskColor">Card Color</label>
                    <select id="taskColor" className="form-select" onInput={handleCardColorChange}>
                        <option value="blue" defaultValue>Blue</option>
                        <option value="purple">Purple</option>
                        <option value="yellow">Yellow</option>
                        <option value="pink">Pink</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="taskCompleted">Mark as completed</label>
                    <input type="checkbox" id="taskCompleted" onInput={handleStatusChange} />
                </div>
                <button type="submit" className="form-submit-btn">Add</button>
            </form>
            <div>
                <span>Tổng: {todos.length} task(s),</span>
                <span> Hoàn thành: {todos.filter(item => item.isCompleted === true).length} task(s),</span>
                <span> Còn lại: {todos.filter(item => item.isCompleted === false).length} task(s)</span>
            </div>
            <div className={`todo-list ${todos.length > 0 ? "" : "no-todo"}`}>
                {todos.length > 0
                    ? todos.map(todo => {
                        return <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    })
                    : <div>Chưa có task nào. Hãy thêm task đầu tiên!</div>
                }
            </div>
        </div>
    );
}

export default Todo;