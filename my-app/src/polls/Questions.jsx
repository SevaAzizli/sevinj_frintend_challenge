import React, {useEffect, useState} from 'react';
import {Question} from "./Question";
import  "./questions.css"

export function Questions() {
    const loadQuestions = () => {
        fetch('https://polls.apiblueprint.org/questions')
            .then(result => result.json())
            .then((data) => {
                console.log(data);
                setQuestions(data)
            })
    }
    useEffect(() => {
        loadQuestions()
    }, []);

    const [questions, setQuestions] = useState([]);

    const questionItem = questions.map(question =>
        <div className="grid-item">
            <Question question={question}/>
        </div>
    );

    return (
        <>
        <h2 className="title">Questions</h2>
        <div className="grid-container">{questionItem}
        </div>
            </>
    )

}

