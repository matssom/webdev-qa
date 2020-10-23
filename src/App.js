import React from 'react';

import Container from './components/Container';
import Loading from './components/Loading'
import QuestionGroup from './components/QuestionGroup';

import fetchQuestions from './fetchQuestions';

const App = () => {

    return (
        <div>
            <Container>
                <QuestionGroup />
            </Container>
        </div>
    );
}

export default App;