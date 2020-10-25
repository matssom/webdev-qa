import React from 'react';

import ReactMarkdown from 'react-markdown/with-html';
import gfm from 'remark-gfm'

// import styled from './styled.module.scss';

const QuestionGroup = (props) => {

    return (
        <div>
            <ReactMarkdown plugins={[gfm]} {...props} allowDangerousHtml />
        </div>
    );
};

export default QuestionGroup;