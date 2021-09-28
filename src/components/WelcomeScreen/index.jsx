import React from "react";
import { Container } from "react-bootstrap";
import { CustomButton } from "../Button";
import { Paragraph } from "../Paragraph/styles";
import { BigText } from "../Title/styles";

export const WelcomeScreenComponent = () => {
    return(
        <Container>
            <div className="text-center mt-5">
                    <BigText large className="pb-2">We Are dSoc..</BigText>
                    <Paragraph grey bold>Southamptom University Decentralized Society</Paragraph>
                <CustomButton text="Take me further" to="target" />
            </div>
        </Container>
    );
}