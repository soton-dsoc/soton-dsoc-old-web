import styled from "styled-components";

export const Paragraph = styled.p`
    color: ${props => props.grey ? "#757575" : "#000000"};
    font-size: 18px;
    font-weight: ${props => props.bold ? "bold" : "normal"};
`