import React from "react";
import styled from "styled-components";
import Arrow from "./arrow-back";
import Home from './home';

const IconContainer = styled.div`
    position: absolute;
    ${props => props.right ? 'right: 20px;' : 'left: 20px;'}
    top: 50%;
    margin-top: -10px;
    height: 20px;
    @media(max-width: 1200px) {
        display: none;
    }
`;


const icons = { 
    prev: Arrow,
    home: Home,
    next: Arrow,
    up: Arrow
}

export default icon => props => {
    const Icon = icons[icon];
    console.log(Icon, icons, icon)
    if(!icon) return null;
    return (
        <IconContainer right={icon==="next"}>
            <Icon {...props} up={icon==="up"} right={icon==='next'} />
        </IconContainer>
    );
};