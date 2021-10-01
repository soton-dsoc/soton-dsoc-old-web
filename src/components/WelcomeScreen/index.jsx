import React from "react";
import { Container, Stack } from "react-bootstrap";
import { CustomButton } from "../Button";
import { Paragraph } from "../Paragraph/styles";
import { BigText } from "../Title/styles";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { DiscordButton, ImageResizing } from "./styles"
import { CoreContainer } from "../../globalStyles";
import { VerticalStack } from "../../globalStyles";
import discord from "../../img/discord.png"

class WelcomeScreenComponent extends React.Component {
    render() {
        return (
            <CoreContainer>
                <VerticalStack className="text-center mx-auto">
                    <div>
                        <BigText large className="pb-2">We Are dSoc..</BigText>
                        <Paragraph grey bold>Southampton University Decentralised Society</Paragraph>
                    </div>
                    <div>
                        <Logo className="mx-auto d-block" />
                    </div>
                    <div className="pt-4 mx-auto">
                        <DiscordButton href="https://discord.gg/eJ2cGWR3" target="_blank">
                            <BigText small>Join us on discord</BigText>
                            <ImageResizing src={discord} alt="discord link" />
                        </DiscordButton>
                    </div>
                    <div className="pt-4">
                        <CustomButton to="second" text="Take me further" />
                    </div>
                </VerticalStack>
            </CoreContainer>
        );
    }
}

export default WelcomeScreenComponent;