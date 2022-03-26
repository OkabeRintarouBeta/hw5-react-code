import { useState,useEffect } from "react";
import {getDatamuseRhymeUrl,getDatamuseSimilarToUrl,groupBy} from '../utils';

const InputWord=(props)=>{
    const {setInputWord,setResult,setLoading,setButton}=props;

    const [targetWord,setTargetWord]=useState('');
    const [wordList,setWordList]=useState('');

    const getRhymes=()=>{
        setLoading("...loading");
        setButton('rhymes');
        fetch(getDatamuseRhymeUrl(targetWord))
            .then((response)=>response.json())
            .then((data)=>{
                setLoading("");
                setResult(data);
            });
        addSearchResult();
    }


    const getSimilar=()=>{
        setLoading("...loading");
        setButton('similar')

        fetch(getDatamuseSimilarToUrl(targetWord))
            .then((response)=>response.json())
            .then((data)=>{
                setLoading("");
                setResult(data);
            });
        addSearchResult();
    }



    const addSearchResult=()=>{
        setResult(()=>{
            if (wordList.length===0){
                setWordList("");
            }
            return wordList;
        })
        setInputWord(()=>{
            return targetWord;
        })
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            getRhymes();
        }
    }

    return(
        <div className="input-group col">

            <input className="form-control" type="text" placeholder="Enter a word" id="word_input"
                   value={targetWord}
                   onChange={(e) => setTargetWord(e.target.value)}
                   onKeyDown={keyDownHandler}
            />
            <button id="show_rhymes" type="button" className="btn btn-primary" onClick={getRhymes}>Show rhyming words</button>
            <button id="show_synonyms" type="button" className="btn btn-secondary" onClick={getSimilar}>Show synonyms</button>
        </div>
    )
 }

 export default InputWord;