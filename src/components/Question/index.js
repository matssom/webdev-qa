import React from 'react';

import styled from './styled.module.scss';

const Question = ({ q, a, t}) => {
    

    return(
        <li>
            <div>
                <h2>{q}</h2>
                <span>{t}</span>
            </div>
            <p>{a}</p>
        </li>
    );
}

export default Question;