import React from 'react'
import '../Styles/TestCard.css'


function TestCart({quiz}) {
    return (
        <div className="card">
            <h2>{quiz.id}. {quiz.title}</h2>
            <p>{quiz.description}</p>
            <ul>
                {quiz.input.map(input =>
                    <li><input type="radio" name="quiz" />{input}</li>
                )}
            </ul>
        </div>
    )
}

export default TestCart
