import React, {useState} from 'react'
import TestCart from './TestCart'
import '../Styles/TestPage.css'


function TestPage() {
    const [quiz, setQuiz] = useState([
        {
            id: 1, 
            title: "Нахуй ти це зробив?", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid error voluptatem nostrum mollitia animi? Laboriosam officiis enim magni",
            input: [
                "1. daun",
                "2. daun",
                "3. daun"
            ]  
        },
        {
            id: 2, 
            title: "ХуйНА", 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid error voluptatem nostrum mollitia animi? Laboriosam officiis enim magni",
            input: [
                "1. daun",
                "2. daun",
                "3. daun",
                "4. daun"
            ]  
        },
    ]);


    return (
        <div>
            <div className="title">
                <h1>SuperTest</h1>
                <a href="#">Premium</a>
            </div>

            <div className="conteiner">
                {quiz.map(card =>
                    <TestCart quiz={card} key={card.id}/>
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
