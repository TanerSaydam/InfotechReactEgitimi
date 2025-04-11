import { useEffect } from "react";
import { useState } from "react";

function App(){
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

    function showForm(){
        if(isUpdateFormActive){
            return(
            <>
                {/* Update Part */}
                <div>
                    <input id="updateTodo" value={updateTodo.work} onChange={(e) => setUpdateTodo((prev) => ({...prev,work: e.target.value}))}  />
                    <button onClick={update}>Update</button>
                </div>
            </>
            )
        }else{
            return(
            <>
                {/* Save Part */}
                <div>
                    <input id="todo" value={todo} onChange={changeTodo}  />
                    <button onClick={save}>Save</button>
                </div>
            </>
            );
        }
    }

    return(
        <>
            <h1>Hello world</h1>
            {showForm()}
            {isUpdateFormActive
            ? (
            <>
                {/* Save Part */}
                <div>
                    <input id="todo" value={todo} onChange={changeTodo}  />
                    <button onClick={save}>Save</button>
                </div>
            </>
            )
            : (
            <>
                {/* Save Part */}
                <div>
                    <input id="todo" value={todo} onChange={changeTodo}  />
                    <button onClick={save}>Save</button>
                </div>
            </>
            )
            }
            <hr />
            <ul>
                {todos.map((val, index) =>
                        <li key={index}>
                            {val.work}
                            <button onClick={() => editTodo(val)}>Edit</button>
                            <button onClick={() => deleteTodo(val.id)}>Delete</button>
                        </li>)}
            </ul>
        </>
    )
}

export default App; //20:13 görüşelim