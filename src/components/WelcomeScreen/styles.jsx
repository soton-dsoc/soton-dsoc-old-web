import styled from "styled-components"

export const DiscordButton = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0.5rem;
    margin: auto;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        border: 2px solid #757575;
    }

    @media screen and (max-width: 430px) {
        border: 2px solid #757575;
    }
`

export const ImageResizing = styled.img`
    width: 5rem;
    margin: auto;

        @media screen and (max-width: 430px) {
            width: 2rem;
    }
`