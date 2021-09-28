import styled from "styled-components";
import { Container } from "react-bootstrap";

export const CoreContainer = styled(Container)`
    font-family: 'Roboto Mono';
    height: 100%;

    @media screen and (max-width: 400px) {
        height: max-content;
        padding-bottom: 1rem;
    }
`