import React from "react";
import { CoreContainer, VerticalStack } from "../../globalStyles";
import { Paragraph } from "../Paragraph/styles";
import { BigText } from "../Title/styles";
import { Centered, IconRow, StrictContainer, IconResizing } from "./styles";
import discord from "../../img/discord.png"
import twitter from "../../img/twitter.png"
import github from "../../img/github.png"

class EventsScreenComponent extends React.Component {
    render() {
        return (
            <StrictContainer>
                <Centered js="space-around">
                    <span id="third" />
                    <BigText medium>Regular meetings</BigText>
                    <Centered className="text-center" js="center">
                        <Paragraph>Our regular meetings usually take place every Wednesday at 4pm. Follow our twitter and discord for more updates</Paragraph>
                        <Paragraph>We also host online meetings on the discord every Sunday at 1pm</Paragraph>
                    </Centered>
                    <div>
                        <IconRow>
                            <a href="https://discord.gg/3TeaAWRm" target="_blank">
                                <IconResizing src={discord} />
                            </a>
                            <a href="https://twitter.com/SotonDsoc" target="_blank">
                                <IconResizing src={twitter} />
                            </a>
                            <a href="https://github.com/soton-dsoc" target="_blank">
                                <IconResizing src={github} />
                            </a>
                        </IconRow>
                        <Paragraph className="text-center" grey bold>Southampton University Decentralisation Society</Paragraph>
                        <Paragraph className="text-center" grey bold>All right reserved. ©{new Date().getFullYear()}</Paragraph>
                    </div>
                </Centered>
            </StrictContainer>
        )
    }
}

export default EventsScreenComponent;