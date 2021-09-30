import React from "react";
import { Paragraph } from "../Paragraph/styles";
import { BoxBordered } from "./styles";

export const BoxPoint = (props) => {
    return(
        <BoxBordered>
            <Paragraph black normal>{props.text}</Paragraph>
        </BoxBordered>
    )
}
