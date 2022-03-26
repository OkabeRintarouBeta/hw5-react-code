

const ListType=(props)=>{
    const {inputWord,wordList,setButton,isLoading}=props;

    const addWordType=()=>{
        if(wordList.length!=0){
            if (setButton==='rhyme'){
                return `Words that rhymes with ${inputWord}`;
            }
            else return `Words with a meaning similar to ${inputWord}`;
        }
    }
    const noWords=()=>{
        if(inputWord.length==0) return "";
        else if(isLoading.length==0 && wordList.length===0) {return "(no results)";}
        else return "";

    }

    return (
        <div className="row">
            <h2>{noWords()}</h2>
            <h2>{addWordType()}</h2>
        </div>
    )
}
export default ListType;