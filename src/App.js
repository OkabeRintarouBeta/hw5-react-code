import logo from './logo.svg';
import './App.css';
import InputWord from "./components/InputWord";
import ListResult from "./components/ListResult";
import ListType from "./components/ListType"
import { useState } from "react";


function App() {
    const [inputWord,setInputWord]=useState('');
    const [loading,setLoading]=useState('');
    const [typeButton,setTypeButton]=useState('');
    const [saveWord,setSaveWord]=useState('')
    const [result,setResult]=useState('')


    return (
          <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 5)</h1>
              <div>link: https://github.com/OkabeRintarouBeta/si579-gh-pages-react</div>
            <div className="row">
              <div className="col">Saved words: <span id="saved_words">{saveWord}</span></div>
            </div>
            <div className="row">
              <InputWord
                  // setInputWord,setResult,setLoading,setButton
                  setInputWord={setInputWord}
                  setResult={setResult}
                  setLoading={setLoading}
                  setButton={setTypeButton}
                />
            </div>
            <div className="row">
              <ListType
                  // inputWord,wordList,setButton,isLoading
                  inputWord={inputWord}
                  wordList={result}
                  setButton={typeButton}
                  isLoading={loading}
              />
            </div>
            <div className="output row">
              <ListResult
                  // resList,setSavedWords,searchType
                  resList={result}
                  setSavedWords={setSaveWord}
                  searchType={typeButton}
              />
            </div>
              <h2>{loading}</h2>
          </main>
    );
}

export default App;
