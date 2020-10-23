import React from 'react';

import Question from '../Question';
import styled from './styled.module.scss';

const QuestionGroup = ({ list }) => {
    
    return (
        <ul className={styled.container}>
            {list.map((e, i) => <Question key={i} q={e.question} a={e.answer} t={e.topic}/>)}
        </ul>
    );
};

export default QuestionGroup;