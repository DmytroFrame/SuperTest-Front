import React from 'react'
import '../Styles/TestCard.css'


function TestCart({quiz, add}) {
    


    return (
        <div className="card">
            <p><strong>{quiz.id}. </strong>{quiz.title}</p>
            <ul>
                { quiz.input.map( (input, index) =>
                    <li key={index}>
                        <input type={quiz.inputType} name={quiz.id} onChange={add(quiz.id, input.title)}/>
                        {index +1}. {input.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TestCart
