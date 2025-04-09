import { useEffect } from "react";
import { useState } from "react";

function App(){
    const [todo,setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        getAllTodo();
    },[])

    function changeTodo(event){
        setTodo(event.target.value);
    }

    async function getAllTodo(){
        const list = await fetch("https://localhost:7014/todos").then(res => res.json());
        //console.log(list);
        setTodos(list);
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
            getAllTodo();
            setTodo("");
            //const el = document.querySelector("#todo");
            const el = document.getElementById("todo");
            el.focus();
        }).catch(err => {
            console.log(err);
            alert("Something went wrong");
        });
    }

    async function deleteTodo(id){
        const result = window.confirm("You want to delete todo?");
        if(!result) return;

        await fetch(`https://localhost:7014/todos/${id}`,{method: "DELETE"}); //ters tırnak `` ctrl+alt+enterin solundaki virgül ile yapılıyor. İki defa basıyorsunuz.

        getAllTodo();
    }

    return(
        <>
            <h1>Hello world</h1>
            <input id="todo" value={todo} onChange={changeTodo}  />
            <button onClick={save}>Save</button>
            <hr />
            <ul>
                {todos.map((val, index) =>
                        <li key={index}>
                            {val.work}
                            <button onClick={() => deleteTodo(val.id)}>Delete</button>
                        </li>)}
            </ul>
        </>
    )
}

export default App; //20:13 görüşelim