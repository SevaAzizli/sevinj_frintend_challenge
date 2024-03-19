import React from 'react';
import styles from './question.css'

export function Question({question}) {
    return (
        <div className={styles}>
        <h3 >{question.question}</h3>
        <div>{question.published_at}</div>
        <div>{question.choices.length}</div>
    </div>
    )


}

