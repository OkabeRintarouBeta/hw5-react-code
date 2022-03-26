import {groupBy} from "../utils";
import './ListResult.css'

const ListResult=(props)=>{
    const {resList,setSavedWords,searchType}=props;

    // console.log(resList)
    const addToSave=(e)=>{
        setSavedWords((previousList)=>{
            if (previousList.length===0){
                return [e.target.id];
            }
            else if(previousList.length!==0 && !previousList.includes(e.target.id)){
                return [...previousList,",",e.target.id];
            }
            else return previousList;
        })
    }

    const groupedResList=groupBy(resList,'numSyllables');
    const outputHTML=[];


    if (searchType==='rhymes'){
        for (let idx in groupedResList){
            outputHTML.push(<h2 key={idx}>Syllabus:{idx}</h2>);
            for(const wd of groupedResList[idx]){
                outputHTML.push(
                    <li className="list-item" key={wd.word}>
                        {wd.word}<span>     </span>
                        <button type="button" className="btn btn-save" id={wd.word} onClick={addToSave}>
                            Save
                        </button>
                    </li>
                )
            }
        }
    }
    else{
        for (let idx in groupedResList){
            for(const wd of groupedResList[idx]){
                outputHTML.push(
                    <li className="list-item" key={wd.word}>
                        {wd.word}<span>     </span>
                        <button type="button" className="btn btn-save" id={wd.word} onClick={addToSave}>
                            Save
                        </button>
                    </li>
                )
            }
        }

    }

    return (
        <div className="output-row">
            {outputHTML}
        </div>
    )
}

export default ListResult;