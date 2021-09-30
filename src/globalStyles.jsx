import styled from "styled-components";
import App from "./App";
import { Container } from "react-bootstrap";

export const CoreContainer = styled(Container)`
    font-family: 'Roboto Mono';
    height: 100%;

    @media screen and (max-width: 400px) {
        height: max-content;
        padding-bottom: 1rem;
    }
`

export const VerticalStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: inherit;
    margin: auto;
    gap: 1rem;
`
