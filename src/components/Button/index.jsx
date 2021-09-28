import React from "react";
import { StyledLink } from "./styles";

export const CustomButton = (props) => {
    return(
        <StyledLink href={props.to} target="_blank" delay={props.slow ? 500 : 1000}>{props.text === null ? "I am a button" : props.text}</StyledLink>        
    )
}