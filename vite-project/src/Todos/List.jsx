function ListTodo({ todos, deleteTodo, editTodo }) {
    return (
        <ul>
            {todos.map((val, index) =>
                <li key={index}>
                    {val.work}
                    <button onClick={() => editTodo(val)}>Edit</button>
                    <button onClick={() => deleteTodo(val.id)}>Delete</button>
                </li>)}
        </ul>
    )
}

export default ListTodo;