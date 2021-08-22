import React from 'react'
import '../Styles/TestCard.css'


function TestCart({quiz}) {
    return (
        <div className="card">
            <p><strong>{quiz.id}. </strong>{quiz.title}</p>
            <ul>
                { quiz.input.map( (input, index) =>
                    <li key={index}>
                        <input type={quiz.inputType} name="quiz" />{index +1}. {input}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TestCart
