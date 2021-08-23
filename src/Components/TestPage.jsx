import React, {useState, useEffect} from 'react'
import TestCart from './TestCart'
import '../Styles/TestPage.css'
import axios from 'axios';



function TestPage() {

    const [quiz, setQuiz] = useState([]);
    
    async function getdodik() {
        const response = await axios.get('http://localhost:5000/api/test1')
        setQuiz(response.data)
    }

    useEffect(()=>{
        getdodik()
    },[])



    let newObj = {}
    function addYouResol(number, resolt){
        // newObj[number] = resolt
        console.log("om funk you mom")
    }




    return (
        <div>            

            <div className="conteiner">
                {quiz.map(card =>
                    <TestCart quiz={card} add={addYouResol} key={card.id}/>
                )}

                <div className="card">
                    <div className="submit">
                        <input type="text" placeholder="You username"/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TestPage
