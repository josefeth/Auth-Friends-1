import React from 'react';
import styled from 'styled-components';



const Friend = props => {
    return(
        <>
            <h1>Friend # {props.data.id}</h1>
            <h2>Name: {props.data.name}</h2>
            <p class = "age">Age: {props.data.age}</p>
            <p class = "email">E-Mail: {props.data.email}</p>
        </>
    );
}

export default Friend;  