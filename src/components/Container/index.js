import React from 'react';

import styled from './styled.module.scss';

const Container = (props) => {
    

    return(
        <div className={styled.container}>
            {props.children}
        </div>
    );
}

export default Container;