import React from 'react';
import { useState, useEffect } from 'react';

import Question from '../Question';
import Loading from '../Loading';
import Markdown from '../Markdown';

import styled from './styled.module.scss';
import fetchQuestions from '../../fetchQuestions';

const renderQuestionList = (list) => {

    return (
        <ul className={styled.list}>
            {list.map((e, i) => {
                return (
                    <Question 
                        key={i} 
                        q={e.question} 
                        a={<Markdown source={e.answer}/>} 
                        t={e.topic}
                    />
                );
            })}
        </ul>
    );
};

const QuestionGroup = () => {
    
    const [qna, setQna] = useState(undefined);

    useEffect(async () => {
        const q = await fetchQuestions();
        if (q) setQna(q.data);
    }, []);

    return (
        <div className={styled.container}>
            {qna !== undefined ? qna ? renderQuestionList(qna) : <Loading text="Could not load questions"/> : <Loading />}
        </div>
    );
};

export default QuestionGroup;