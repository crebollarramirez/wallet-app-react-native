import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// Importing colors and text components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// Importing types for props
import { BalanceCardProps } from "./types";

// Importing the background image for the card
import card_bg from "./../../assets/backgrounds/background_transparent.png";

// Styled component for the card background
// - Uses an ImageBackground to display the card background image
// - Sets the size, resize mode, background color, and border radius
// - Overflow hidden ensures the content stays within the rounded corners
const CardBackground = styled.ImageBackground`
    height: 75%;
    width: 100%;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px;
    overflow: hidden;
`;

// Styled component for the touchable view inside the card
// - Aligns content to the center and spaces elements vertically
// - Provides padding around the content and ensures it fills the available space
const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

// Styled component for a row within the card
// - Aligns items horizontally and spaces them out across the row
// - Takes up full width of the container
const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

// Styled component for the logo image
// - Ensures the logo fills the available space while maintaining aspect ratio
// - Sets the resize mode to contain, preventing distortion
const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

/**
 * BalanceCard Component
 * 
 * This functional component represents a balance card in the UI, displaying an account number, balance, and logo.
 * 
 * @param {BalanceCardProps} props - The properties passed to the component, including account number, balance, and logo source.
 * 
 * @returns {JSX.Element} A styled card component with account information and balance details.
 */
const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        // The card background with an image and styled content inside
        <CardBackground source={card_bg}>
            <TouchableView>
                {/* First row of the card: displays the last 4 digits of the account number */}
                <CardRow>
                    <RegularText textStyles={{ color: colors.white }}>
                        ******{props?.accountNo?.slice(6, 10)}
                    </RegularText>
                </CardRow>

                {/* Second row of the card: displays the balance and logo */}
                <CardRow>
                    <View style={{ flex: 3 }}>
                        {/* Text for the "Total Balance" label */}
                        <SmallText textStyles={{ marginBottom: 5, color: colors.graylight }}>
                            Total Balance
                        </SmallText>
                        {/* Text for displaying the balance amount */}
                        <RegularText textStyles={{ fontSize: 19 }}>
                            ${props.balance}
                        </RegularText>
                    </View>
                    {/* Logo image displayed on the right side of the card */}
                    <Logo source={props.logo} />
                </CardRow>
            </TouchableView>
        </CardBackground>
    );
};

export default BalanceCard;
