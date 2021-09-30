import React from "react";
import { StyledLink } from "./styles";

export const CustomButton = (props) => {
    return(
        <StyledLink to={props.to} 
                    duration={props.slow ? 500 : 1000}
                    smooth={true}
                    hashSpy={true}
                    isDynamic={true}
                    ignoreCancelEvents={false}>
                        {props.text === null ? "I am a button" : props.text}
                    </StyledLink>        
    )
}