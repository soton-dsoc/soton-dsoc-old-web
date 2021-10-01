import styled from "styled-components";

export const GreyBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;
    @media screen and (max-width: 430px) {
        height: max-content;
        background-color: #FAFAFA;
    }
`

export const Centered = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content:  ${props => props.js};
    padding: 2rem;
    gap: 2rem;
    flex-flow: column;
    height: inherit;
    @media screen and (max-width: 430px) {
        width: 100%;
        gap: 1rem;
        padding: 1rem;
    }
`