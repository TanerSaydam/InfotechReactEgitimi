import { useEffect, useState } from "react";

function App() {
  const [words, setWords] = useState([]);

  function changeLanguage(lang){
    localStorage.setItem("lang",lang);
    getWords();
  }

  function getWords() {
    const lang = localStorage.getItem("lang");
    fetch(`/i18n/${lang}.json`).then(res => res.json()).then((res) => {
      setWords(res);
    });
  }

  useEffect(() => {
    getWords();
  },[]);

  return (
    <>
      <button onClick={() => changeLanguage('en')}>{words["LANGUAGE"]?.["EN"]}</button>
      <button onClick={() => changeLanguage('tr')}>{words["LANGUAGE"]?.["TR"]}</button>

      <h1>{words["HELLO_WORLD"]}</h1>
    </>
  )
}

export default App