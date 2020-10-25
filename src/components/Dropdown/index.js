import React from 'react';

import styled from './styled.module.scss';

const Option = (props) => {

    return (
        <option className={styled.option}>
            {props.children}
        </option>
    );
};

const Dropdown = (props) => {

    return (
        <select value={props.value} onChange={props.onChange} className={styled.container}>
            {props.choices ? props.choices.map((e, i) => <Option key={i} >{e}</Option>) : ''}
        </select>
    );
};

export default Dropdown;