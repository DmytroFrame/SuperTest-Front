import React, {useState, useEffect} from 'react'
import QuizCart from './QuizCart'
import './Styles/QuizPage.css'
import axios from 'axios';


function QuizPage() {
    const idQuiz = window.location.pathname.split('/')[2]


    const [quiz, setQuiz] = useState([]);
    
    async function getdodik() {
        const response = await axios.get(`http://localhost:5000/api/quiz/${idQuiz}`)
        setQuiz(response.data)
    }

    useEffect(() => getdodik(),[])



    const resultQuiz = quiz
    
    for (let oneQuiz in resultQuiz) {
        for (let oneInput in resultQuiz[oneQuiz]['input']) {
            resultQuiz[oneQuiz]['input'][oneInput]['value'] = false
        }
    }

    function switchValue(number, inputNumber) {
        resultQuiz[number]['input'][inputNumber]['value'] = !resultQuiz[number]['input'][inputNumber]['value']
        // console.log(resultQuiz[number]['input'][inputNumber]['value'])
    }

    // console.log(window.location.pathname)


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
