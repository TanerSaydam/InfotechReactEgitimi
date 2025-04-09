import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([]);

    function changeName(event) {
        setName(event.target.value);


        const todos = ["Taner","Ahmet","Mehmet"];
        const todos2 = todos.map((v) => v + " Bey");
        //["Taner Bey","Ahmet Bey","Mehmet Bey"]
    }

    return (
        <>
            <h1>Hello World</h1>
            <input type="text"
                value={name}
                onChange={(e) => { //scope
                    setName(e.target.value);
                    //setNameList((prev)=> [...prev, e.target.value]);
                }}
            />
            <button
            onClick={() => setNameList(prev => [...prev, name])}>
                Kaydet
            </button>

            <ul>
                {nameList.map((val) => <li>{val}</li>)}
            </ul>
        </>
    )
}

export default App;

//npm start => terminale yaz enterla

//Ödev:
// Bir tane react app oluşturun.
// App adı todo-app
// İlk olarak içerisini benim yaptığım gibi temizleyin
// App Componenti oluşturun
// App componentine todo değeri girebileceğiniz ve girdiğiniz değeri button tıklaması ile alttaki listeye ekleyebileceğiniz bir component tasarlıyorsunuz.
// EK Ödev (Bonus): Eklediğimiz kaydı bir buton ile silebilmeliyiz.