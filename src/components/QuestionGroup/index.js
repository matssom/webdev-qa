import React from 'react';
import { useEffect, useState } from 'react'; 

import Question from '../Question';
import Loading from '../Loading';
import Markdown from '../Markdown';

import styled from './styled.module.scss';
import fetch from '../../api/fetch';
import Dropdown from '../Dropdown';

const renderList = (list) => {

    return (
        <ul className={styled.list}>
            {list.map((e, i) => {
                return (
                    <Question 
                        key={i} 
                        q={e.question} 
                        a={<Markdown source={e.answer}/>} 
                        t={e.question_type.Type}
                    />
                );
            })}
        </ul>
    );
};

const filterList = (qna, filter) => {
    return renderList(
        filter === 'All' ? qna : qna.filter(e => e.question_type.Type === filter)
    )
};

const QuestionGroup = () => {
    
    const [qna, setQna] = useState(undefined);
    const [types, setTypes] = useState(undefined);
    const [selected, setSelected] = useState('All');

    useEffect(() => {
        const fetchData = async () => {
            if (!(qna || types)) {
                const questions = await fetch('/qnas');
                const questionTypes = await fetch('/question-types');
                if (questions) setQna(questions.data);
                if (questionTypes) setTypes(questionTypes.data);
            }
        };
        fetchData();

    }, [qna, types]);

    const changeSelected = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div className={styled.container}>
            <form className={styled.form}>
                <div className={styled.formGroup}>
                    <label className={styled.label} htmlFor="search">Find Anything</label>
                    <input id="search" className={styled.search} type="text" placeholder="Search.." name="search"></input>
                </div>
                <div className={styled.formGroup}   >
                    <label className={styled.label} htmlFor="dropdown">Topic</label>
                    <Dropdown id="dropdown" onChange={changeSelected} choices={types ? ['All', ...types.map(e => e.Type)] : ['All']}/>
                </div>
            </form>
            {qna !== undefined ? qna ? filterList(qna, selected) : <Loading text="Could not load questions"/> : <Loading />}
        </div>
    );
};

export default QuestionGroup;