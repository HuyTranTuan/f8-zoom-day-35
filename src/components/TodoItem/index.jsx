function TodoItem({ todo, handleDelete, handleEdit }) {

    return (
        <div className={`todo-card ${todo.cardColor} ${todo.isCompleted ? 'completed' : ''}`}>
            <div className="todo-header">
                <h3 className="todo-title">{todo.title}</h3>
                <div className="todo-btn-menu">
                    <div className="todo-btn-item edit"
                        onClick={() => handleEdit(todo.id)}
                    >
                        Edit
                    </div>
                    <div className="todo-btn-item delete"
                        onClick={() => handleDelete(todo.id)}
                    >
                        Delete
                    </div>
                    <div className="todo-btn-item complete">
                        {todo.isCompleted ? 'Completed' : 'Active'}
                    </div>
                </div>
            </div>
            <p className="todo-description">{todo.description}</p>
        </div>
    )
}

export default TodoItem;