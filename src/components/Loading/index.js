import React from 'react';

import styled from './styled.module.scss';

const Loading = ({ text }) => {
    

    return(
        <div className={styled.container}>
            <h2 className={styled.text}>{ text ? text : 'Loading...' }</h2>
        </div>
    );
}

export default Loading;