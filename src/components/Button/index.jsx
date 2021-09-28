import React from "react";
import { StyledLink } from "./styles";

export const CustomButton = (props) => {
    return(
        <StyledLink type="button" to={props.to} delay={props.slow ? 500 : 1000}>{props.text === null ? "I am a button" : props.text}</StyledLink>        
    )
}