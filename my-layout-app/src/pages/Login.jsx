import { useNavigate } from "react-router";

export function Login(){
    const nagivate = useNavigate();

    function signIn(event){
        event.preventDefault();
        // alert("User not found");
        // return;
        localStorage.setItem("token","This is my after token");
        nagivate("/");
    }

    return(
        <div className="row" style={{width: "99%", height: "100vh"}}>
            <div className="col-md-8">
                <div style={{padding:"15px 0px", paddingLeft: "20px", display:"flex", justifyContent:"center", alignItems: "center", "height": "100%"}}>
                    <img src="/login.png" style={{width:"100%", height:"100%", objectFit: "cover"}}/>
                </div>
            </div>
            <div className="col-md-4">
                <div className="d-flex flex-column justify-content-center ps-5 pe-5" style={{height: "98.1vh"}}>
                    <h1>Login Page</h1>
                    <p>You need to enter your information to login</p>
                    <form onSubmit={signIn}>
                        <div className="form-group">
                            <label>UserName</label>
                            <input className="form-control" name="userName" required minLength={3} />
                        </div>
                        <div className="form-group mt-1">
                            <label>Password</label>
                            <input className="form-control" name="password" required />
                        </div>
                        <div className="form-group mt-1">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}