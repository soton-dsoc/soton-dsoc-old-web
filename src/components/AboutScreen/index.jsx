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
                            <BoxPoint text="The University of Southampton Decentralised Society (dSoc) advocates for a better Internet, by introducing the concept of decentralisation to everyone." />
                            <BoxPoint text="We function like a DAO: decentralised autonomous organisation. It is up to its members what dSoc can be." />
                            <BoxPoint text="Since the introduction of the blockchain technology, where Bitcoin relies, there have appeared countless decentralised projects and applications, such as tokens, NFTs or DAOs. Ethereum is the first and most popular blockchain allowing this kind of operations on it." />
                            <BoxPoint text="Bitcoin, the most popular cryptocurrency, is one of the first and best examples of worldwide decentralisation. It allows low cost transactions, with no borders, and it doesn't rely on a central authority. Free and open to everyone." />
                        </Centered>
                        <CustomButton to="third" text="I want to meet" />
                    </Centered>

                </CoreContainer>
            </GreyBackground>
        );
    }
}

export default AboutScreenComponent;