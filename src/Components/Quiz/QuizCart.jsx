import React from 'react'
import './Style/QuizCard.css'


function TestCart({quiz, switchValue}) {
    
    return (
        <div className="card">
            <p><strong>{quiz.id}. </strong>{quiz.title}</p>
            <ul>
                { quiz.input.map( (input, index) =>
                    <li key={index}>
                        <input type={quiz.inputType} name={quiz.id} onClick={()=> {switchValue(quiz.id -1, index)}}/>
                        {index +1}. {input.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TestCart
