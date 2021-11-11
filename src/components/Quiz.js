import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'
const Quiz = ()=>{
    // console.log(QuestionData);
    const [current,setCurrent] = useState(0)
    const [selectChoise,setSelectChoise] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
        // eslint-disable-next-line
    },[selectChoise])

    const checkAnswer=()=>{
        if(selectChoise !== ""){
            if(selectChoise === QuestionsData[current].answer){
                setScore(score+1)
                nextQuestion()
            }else{
                nextQuestion()
            }
        }
    }

    const nextQuestion=()=>{
        setSelectChoise("")
        if(current === QuestionsData.length-1){
            setAppState("score")
        }else{
            setCurrent(current+1)
        }
    }
    return (
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoise("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoise("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoise("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoise("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz