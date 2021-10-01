import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${props => props.grey ? "#757575" : "#212121"};
    font-size: 1rem;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    margin: 0 inherit;
`