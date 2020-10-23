import React from 'react';

import styled from './styled.module.scss';

const Question = ({ q, a, t}) => {
    

    return(
        <li className={styled.container}>
            <div className={styled.headline}>
                <h3 className={styled.question}>Q: {q}</h3>
                <span className={styled.topic}>{t}</span>
            </div>
            <p className={styled.answer}>{a}</p>
        </li>
    );
}

export default Question;