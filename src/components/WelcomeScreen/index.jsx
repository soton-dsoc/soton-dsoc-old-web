import React from "react";
import { Container, Stack } from "react-bootstrap";
import { CustomButton } from "../Button";
import { Paragraph } from "../Paragraph/styles";
import { BigText } from "../Title/styles";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { DiscordButton, ImageResizing, VerticalStack } from "./styles"
import { CoreContainer } from "../../globalStyles";
import discord from "../../img/discord.png"

export const WelcomeScreenComponent = () => {
    return (
        <CoreContainer>
            <VerticalStack className="text-center mx-auto">
                <div>
                    <BigText large className="pb-2">We Are dSoc..</BigText>
                    <Paragraph grey bold>Southampton University Decentralized Society</Paragraph>
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
                    <CustomButton text="Take me further" to="https://discord.gg/eJ2cGWR3" />
                </div>
            </VerticalStack>
        </CoreContainer>
    );
}