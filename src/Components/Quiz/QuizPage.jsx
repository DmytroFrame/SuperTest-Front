import React, {useState, useEffect} from 'react'
import QuizCart from './QuizCart'
import './Styles/QuizPage.css'
import axios from 'axios';


function QuizPage() {

    const [quiz, setQuiz] = useState([]);
    
    async function getdodik() {
        const response = await axios.get('http://localhost:5000/api/test1')
        setQuiz(response.data)
    }

    useEffect(() => getdodik(),[])


    const resoltQuiz = quiz
    
    for (let oneQuiz in resoltQuiz) {
        for (let oneInput in resoltQuiz[oneQuiz]['input']) {
            resoltQuiz[oneQuiz]['input'][oneInput]['value'] = false
        }
    }

    function switchValue(number, inputNumber){
        resoltQuiz[number]['input'][inputNumber]['value'] = !resoltQuiz[number]['input'][inputNumber]['value']
        // console.log(resoltQuiz[number]['input'][inputNumber]['value'])
    }







    return (
        <div>            

            <div className="conteiner">
                {quiz.map(card =>
                    <QuizCart quiz={card} switchValue={switchValue} key={card.id}/>
                )}

                <div className="card">
                    <div className="submit">
                        <input type="text" placeholder="You username" onChange={event => console.log(event.target.value)} />
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuizPage;
