import React from 'react';

import ReactMarkdown from 'react-markdown/with-html';

import styled from './styled.module.scss';

const QuestionGroup = (props) => {

    return (
        <div>
            <ReactMarkdown {...props} allowDangerousHtml />
        </div>
    );
};

export default QuestionGroup;