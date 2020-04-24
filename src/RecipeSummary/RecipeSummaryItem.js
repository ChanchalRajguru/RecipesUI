import React from 'react';

const recipeSummaryItem = (props) => {
    return <p onClick={props.clickHandler}> {props.author} {props.name}</p>
}


export default recipeSummaryItem;

