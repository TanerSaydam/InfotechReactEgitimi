import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

function TimeLayout(){
    let min = 15;
    let sec = 0;
    const [time, setTime] = useState("");
   //const [nowDate, setNowDate] = useState("");

    function changeTime(){
        // setTimeout(() => {
        //     console.log("asdasd");
        // },1000)

        // setInterval(() => {
        //     console.log("sdasd");
        // },1000);

        sec--;
        if(sec < 0){
            min--;
            sec = 59;
        }

        setTime(min + ":" + sec);
    }

    useEffect(() => {
        setInterval(() => {
            changeTime();
        //    const date = new Date();
        //    setNowDate(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        },1000);
    },[])

    return(
        <>
            <h1>{time}</h1>
            {/* <input type="date"  value={new Date().toISOString().split("T")[0]} /> */}
            {/* <h1>{nowDate}</h1> */}
            {/* <h1>Layout</h1>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Logout</Link>
            <Outlet /> */}
        </>
    )
}

export default Layout;