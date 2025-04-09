import { useState } from "react";

function App(){
    const [todo,setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function changeTodo(event){
        setTodo(event.target.value);
    }

    function save(){
        //setTodos((prev) => [...prev, todo]);
        const data = {
            work: todo
        };
        fetch("https://localhost:7014/todos",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(()=> {
            setTodo("");
            //const el = document.querySelector("#todo");
            const el = document.getElementById("todo");
            el.focus();
        }).catch(err => {
            console.log(err);
            alert("Something went wrong");
        });
    }

    return(
        <>
            <h1>Hello world</h1>
            <input id="todo" value={todo} onChange={changeTodo}  />
            <button onClick={save}>Save</button>
            <hr />
            <ul>
                {todos.map((val, index) => <li key={index}>{val}</li>)}
            </ul>
        </>
    )
}

export default App; //20:13 görüşelim