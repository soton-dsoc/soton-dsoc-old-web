import styled from "styled-components";

export const BigText = styled.h1`
    color: ${props => props.light ? "#757575" : "#000000"};
    font-size: ${props => {
        if (props.large) {
            return "64px";
        }
        if (props.medium) {
            return "48px";
        }
        if (props.small) {
            return "36px";
        }
    }};
    font-family: "Roboto Mono";
    font-weight: bold;
    margin: inherit;

    @media screen and (max-width: 430px) {
            font-size: ${props => {
        if (props.large) {
            return "4rem";
        }
        if (props.medium) {
            return "2rem";
        }
        if (props.small) {
            return "1rem";
        }
    }};
    }
`