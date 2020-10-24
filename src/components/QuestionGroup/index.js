import React from 'react';
import { useEffect, useState } from 'react';
import Wade from 'wade';

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
                        t={e.topic}
                    />
                );
            })}
        </ul>
    );
};

const clean = (qna) => {
    return qna.map(e => {
        return {
            question : e.question, 
            topic : e.question_type.Type, 
            answer : e.answer
        };
    });
}

const createIndex = (qna) => {
    return qna.map(e => e.question);
};

const filterByTopic = (qna, topic) => {
    return topic === 'All' ? qna : qna.filter(e => {
        return e.topic === topic;
    });
};

const search = (index, term) => {
    const search = Wade(index);
    return search(term);
}

const QuestionGroup = () => {
    
    const [qna, setQna] = useState();
    const [types, setTypes] = useState();
    const [selected, setSelected] = useState('All');
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredQna, setFilteredQna] = useState(qna);

    useEffect(() => {
        const fetchData = async () => {
            if (!(qna || types)) {
                const questions = await fetch('/qnas');
                const questionTypes = await fetch('/question-types');
                if (questions) {
                    setQna(clean(questions.data));
                }
                if (questionTypes) setTypes(questionTypes.data);
            }
        };
        fetchData();

        if (selected || searchQuery) {
            const timeout = setTimeout(() => {
                qFilter();
                console.log('kjør');
            }, 500);

            return () => {
                clearTimeout(timeout);
            };
        }

    }, [qna, types, selected, searchQuery]);

    const changeSelected = (e) => {
        setSelected(e.target.value);
    }

    const changeSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const qFilter = () => {
        let filteredList = [];
        let filteredIndex = [];
        let searchScore = [];
        
        filteredList = filterByTopic(qna, selected);
        
        if (searchQuery !== '') {
            filteredIndex = createIndex(filteredList);
            searchScore = search(filteredIndex, searchQuery);
            searchScore.forEach((e, i) => {
                setFilteredQna(filteredList.filter((s, j) => j === e.index));
            });
        } else {
            setFilteredQna(filteredList);
        }
    }

    return (
        <div className={styled.container}>
            <form className={styled.form}>
                <div className={styled.formGroup}>
                    <label className={styled.label} htmlFor="search">Find Anything</label>
                    <input onChange={changeSearchQuery} id="search" className={styled.search} type="text" placeholder="Search.." name="search"></input>
                </div>
                <div className={styled.formGroup}   >
                    <label className={styled.label} htmlFor="dropdown">Topic</label>
                    <Dropdown id="dropdown" onChange={changeSelected} choices={types ? ['All', ...types.map(e => e.Type)] : ['All']}/>
                </div>
            </form>
            {qna !== undefined ? qna ? filteredQna ? renderList(filteredQna) : renderList(qna) : <Loading text="Could not load questions"/> : <Loading />}
        </div>
    );
};

export default QuestionGroup;