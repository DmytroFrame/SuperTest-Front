import React, {useState, useEffect, setState} from 'react'
import QuizCart from './QuizCart'
import './Styles/QuizPage.css'
import axios from 'axios';
import QuizResult from './QuizResult';

function QuizPage() {
    let score = 0;
    let username = "";
    let resultQuiz = {};
    // const [resultQuiz, stresultQuiz] = setState({})
    const idQuiz = window.location.pathname.split('/')[2]
    const [switchResolt, setSwitchResolt] = useState(false)
    const [quiz, setQuiz] = useState([]);
    
    async function getDodik() {
        const response = await axios.get(`http://localhost:5000/api/quiz/${idQuiz}`)
        setQuiz(response.data)
    }

    useEffect(() => getDodik(), [])

    
    resultQuiz = Object.assign({}, quiz)

    // for (let oneQuiz in resultQuiz) {
    //     for (let oneInput in resultQuiz[oneQuiz]['input']) {
    //         resultQuiz[oneQuiz]['input'][oneInput]['value'] = false
    //         score += 1
    //     }
    // }

    function switchValue(number, inputNumber) {
        resultQuiz[number +1] = inputNumber +1
    }
    function submit() {
        resultQuiz['username'] = username
        setSwitchResolt(true)
        // resultQuiz[number +1]
        // console.log(resultQuiz)
        // return username
    }



    function LocalQuizPage() {
        return (
            <div>
                <form>
                { quiz.map(card =>
                    <QuizCart quiz={card} switchValue={switchValue} key={card.id}/>
                )}
                </form>
                <div className="card">
                    <div className="submit">
                        <input type="text" placeholder="You username" onChange={event => username = event.target.value} />
                        <button onClick={submit}>Submit</button>
                    </div>
                </div>                         
            </div>
        )
    }


    return (
        <div className="conteiner">
            { !switchResolt &&
                <LocalQuizPage />
            }
            { switchResolt &&
                <QuizResult result={resultQuiz} quiz={quiz}/>
            }

            
        </div>
    )
}

export default QuizPage;
