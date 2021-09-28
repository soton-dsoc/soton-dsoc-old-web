import styled from "styled-components"; 
import { Link } from "react-scroll";

export const StyledLink = styled.a`
    background-color: white;
    color: #000000;
    margin: 0.5rem 3rem;
    padding: 0.5rem 0rem;
    border-color: #000000;
    border-style: solid;
    border-width: 2px;
    text-decoration: none;
    display: inline-block;
    box-shadow: 4px 5px #C4C4C4;
    font-weight: bold;
    &:hover {
        background-color: #C4C4C4;
        color: #000000;
        cursor: pointer;
    }
`
