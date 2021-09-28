import React from "react";
import { Container, Stack } from "react-bootstrap";
import { CustomButton } from "../Button";
import { Paragraph } from "../Paragraph/styles";
import { BigText } from "../Title/styles";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { CoreContainer } from "../../globalStyles";

export const WelcomeScreenComponent = () => {
    return (
        <CoreContainer>
            <Stack gap={5} className="text-center pt-5 col-md-5 mx-auto">
                <div>
                    <BigText large className="pb-2">We Are dSoc..</BigText>
                    <Paragraph grey bold>Southamptom University Decentralized Society</Paragraph>
                </div>
                <Logo className="mx-auto d-block"/>
                <CustomButton text="Take me further" to="https://discord.gg/eJ2cGWR3" />
            </Stack>
        </CoreContainer>
    );
}