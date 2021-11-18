import React from "react";
import { CoreContainer } from "../../globalStyles";
import { BoxPoint } from "../BoxPoint";
import { CustomButton } from "../Button";
import { BigText } from "../Title/styles";
import { VerticalStack } from "../../globalStyles";
import { Centered, GreyBackground } from "./styles";


class AboutScreenComponent extends React.Component {
    render() {
        return (
            <GreyBackground>
                <CoreContainer>
                    <Centered js="space-between" className="text-center">
                        <div>
                            <span id="second" />
                            <BigText medium>So.. What do we stand for?</BigText>
                        </div>
                        <Centered js="space-evenly">
                            <BoxPoint text="The University of Southampton Decentralised Society (dSoc) advocates for a better Internet, by introducing the concept of decentralisation to everyone. dSoc functions like a DAO (Decentralised Autonomous Organisation), meaning Its upto the collective agreement of it's members to decide what dSoc can be." />
                            <BoxPoint text="Bitcoin is a decentralised digital currency, that can be sent from user to user on the peer-to-peer bitcoin blockchain network without the need for intermediaries. Bitcoin is one of the first examples of worldwide decentralisation. It allows for fast, worldwide and low-cost transactions, all without relying on any centralised authority. Free and with an open ledger accessible to everyone." />
                            <BoxPoint text="Since the introduction of the blockchain technology, a multitude of decentralised projects and applications have emerged. A notable example being the first smart contract platform, Ethereum. Smart contracts allow DAOs, ICOs and tokenised projects to be built upon the network." />
                        </Centered>
                        <CustomButton to="third" text="Events" />
                    </Centered>

                </CoreContainer>
            </GreyBackground>
        );
    }
}

export default AboutScreenComponent;