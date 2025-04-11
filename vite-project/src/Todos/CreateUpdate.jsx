function CreateUpdateTodo({isUpdateFormActive, updateTodo, setUpdateTodo, update, save, todo, changeTodo}){
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
            {showForm()}
        </>
    )
}

export default CreateUpdateTodo;