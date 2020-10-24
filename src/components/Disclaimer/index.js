import React from 'react';
import { useState } from 'react';

import styled from './styled.module.scss';

const getDisclaimer = (dismiss) => {
    return (
        <div className={styled.container}>
            <p className={styled.disclaimer}><span className={styled.bold}>Disclaimer: </span>This website is for reference only. If you have any specific concerns, email Anthony at: <a href="mailto:george.a.giannoumis@oslomet.no">george.a.giannoumis@oslomet.no</a></p>
            <button className={styled.button} onClick={dismiss}>X</button>
        </div>
    );
};

const Disclaimer = (props) => {

    const localDisclaimer = localStorage.getItem('disclaimer');

    const [disclaimer, setDisclaimer] = useState(localDisclaimer === 'false' ? false : true);

    const dismiss = () => {
        localStorage.setItem('disclaimer', 'false');
        setDisclaimer(false);
    }

    return (
        <>
            {disclaimer ? getDisclaimer(dismiss) : ''}
        </>
    );
};

export default Disclaimer;

