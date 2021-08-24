import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HomeItem from './HomeItem';
import '../Styles/Home.css'




export default function Home() {
    const [tasks, setTasks] = useState([]);
    
    async function getdodik() {
        const response = await axios.get('http://localhost:5000/api/quizmenu')
        setTasks(response.data)
    }

    useEffect(() => getdodik(),[])

    // console.log(tasks)


    return (
        <div>
            <div className="homepage_title">
                <h2>Select you quiz</h2>
            </div>

            <div className="container_quiz">
                {tasks.map((task, index) => 
                    <HomeItem data={task} key={index}/>
                )}
                

            </div>



        </div>
    )
}
