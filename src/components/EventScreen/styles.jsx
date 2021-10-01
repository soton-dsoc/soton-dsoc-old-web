import styled from "styled-components";

export const DividedBackground = styled.div`

    background: linear-gradient(#000, #000) no-repeat center/2px 80%;
`

export const Centered = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content:  ${props => props.js};
    gap: 2rem;
    flex-flow: column;
    height: inherit;
    @media screen and (max-width: 430px) {
        width: 100%;
        gap: 1rem;
        padding: 1rem;
    }
`

export const IconRow = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem 0.2rem;
    gap: 5rem;
`


export const IconResizing = styled.img`
    width: 2rem;
    margin: auto;

        @media screen and (max-width: 430px) {
            width: 1.7rem;
    }
`