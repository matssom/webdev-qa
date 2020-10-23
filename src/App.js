import React from 'react';
import { useState, useEffect } from 'react';

import Container from './components/Container';
import QuestionGroup from './components/QuestionGroup';

import fetchQuestions from './fetchQuestions';

const App = () => {

    const [qna, setQna] = useState(undefined);

    useEffect(async () => {
        const q = await fetchQuestions();
        setQna(q.data);
    }, []);

    return (
        <div>
            <Container>
                {qna !== undefined ? <QuestionGroup list={qna} /> : <p>Loading...</p>}
            </Container>
        </div>
    );
}

export default App;