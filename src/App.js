import React from 'react';
import { useState, useEffect } from 'react';
import Question from './components/Question';

import fetchQuestions from './fetchQuestions';

const createQuestionList = (list) => {
    return (
        <ul>
            {list.map((e, i) => <Question key={i} q={e.question} a={e.answer} t={e.topic}/>)}
        </ul>
    )
}

const App = () => {

    const [qna, setQna] = useState(undefined);

    useEffect(async () => {
        const q = await fetchQuestions();
        setQna(q.data);
    }, []);

    return (
        <div>
            {qna !== undefined ? createQuestionList(qna)  : <p>Loading...</p>}
        </div>
    );
}

export default App;