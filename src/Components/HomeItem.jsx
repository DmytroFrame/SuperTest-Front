import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/HomeItem.css'


function HomeItem({data}) {


    return (
        <div className="quiz_card">
            <h2 className="quiz_card_title">{data.title}</h2>
            <p className="quiz_card_description">{data.description}</p>
            
            <p className="quiz_card_sum">Quizzes: {data.tasks}</p>
            <Link to={`/quiz/${data.id}`}>
                <button className="quiz_card_btn">Go</button>
            </Link>
        </div>
        
    )
}

export default HomeItem
