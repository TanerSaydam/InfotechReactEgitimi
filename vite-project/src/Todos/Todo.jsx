import { useEffect } from "react";
import { useState } from "react";
import ListTodo from "./List";
import CreateUpdateTodo from "./CreateUpdate";

function Todo(){
    const [todo,setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [updateTodo, setUpdateTodo] = useState({});
    const [isUpdateFormActive, setIsUpdateFormActive] = useState(false);

    useEffect(()=> {
        getAllTodo();
    },[]);

    function changeTodo(event){
        setTodo(event.target.value);
    }

    async function getAllTodo(){
        const list = await fetch("https://localhost:7014/todos").then(res => res.json());
        setTodos(list);
    }

    function save(){
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

        await fetch(`https://localhost:7014/todos/${id}`,{method: "DELETE"});
        getAllTodo();
    }

    function editTodo(val){
        setUpdateTodo(val);
        setIsUpdateFormActive(true);
    }

    async function update(){
        fetch("https://localhost:7014/todos",{
            method: "PUT",
            body: JSON.stringify(updateTodo),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            getAllTodo();
            setUpdateTodo({id: "", work: ""});
            setIsUpdateFormActive(false);
        });
    }

    return(
        <>
            <h1>Hello world</h1>
            <CreateUpdateTodo isUpdateFormActive={isUpdateFormActive} updateTodo={updateTodo} setUpdateTodo={setUpdateTodo} update={update} save={save} todo={todo} changeTodo={changeTodo} />
            <hr />
            <ListTodo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </>
    )
}

export default Todo;