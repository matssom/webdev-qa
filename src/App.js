import React from 'react';

import Container from './components/Container';
import QuestionGroup from './components/QuestionGroup';
import Disclaimer from './components/Disclaimer';

import styled from './styled.module.scss';

const App = () => {

    return (
        <div>
            <Container>
                <header>
                    <div >
                        <div className={styled.centered}>
                            <h1 className={styled.headline}>Frequently asked questions</h1>
                            <h2 className={styled.tagline}>Universal webdesing and development - OsloMet. Updated every week. </h2>
                        </div>
                    </div>
                </header>
                <main>
                    <QuestionGroup />
                </main>
            </Container>
            <Disclaimer />
        </div>
    );
}

export default App;