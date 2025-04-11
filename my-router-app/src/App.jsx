import {Link, Outlet, useNavigate} from 'react-router';

function App(){
    const navigate = useNavigate();

    function gotoPage(pageName){
        // window.location.href = pageName;
        navigate(pageName)
    }

    return(
        <>
            <Link style={{textDecoration:"none", padding: "3px", border: "1px solid"}} to="/a">A Component</Link>
            <Link to="/b">B Component</Link>
            <Link to="/c">C Component</Link>
            <hr />
            <button onClick={()=> gotoPage("/a")}>A Component</button>
            <button onClick={()=> gotoPage("/b")}>B Component</button>
            <button onClick={()=> gotoPage("/c")}>C Component</button>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default App;