import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// Importing shared constants and colors
import { ScreenWidth } from "../shared";
import { colors } from "../colors";

// Importing text components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// Importing types for props
import { CardProps } from "./types";

// Importing background image
import card_bg from "./../../assets/backgrounds/background_transparent.png";

// Importing navigation hooks
import { useNavigation } from "@react-navigation/native";
import { Props as HomeProps } from "./../../screens/Home";

// Styled component for the card background
// - Sets up the card's visual appearance, including background image, size, and border radius
const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.accent};
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`;

// Styled component for the card touchable area
// - Allows the card to be pressed, triggering navigation or other actions
const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

// Styled component for the inner view of the card
// - Handles the layout and spacing of the card's content
const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

// Styled component for arranging content in a row
// - Aligns the content horizontally with space between elements
const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

// Styled component for displaying the logo
// - Ensures the logo is properly sized and contained within the card
const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

/**
 * CardItem Component
 * 
 * A card component that displays account information, balance, and a logo.
 * The card is touchable and navigates to the "Balance" screen when pressed.
 * 
 * @param {CardProps} props - The properties passed to the component, including:
 *   - `accountNo`: The account number to be partially displayed
 *   - `balance`: The balance amount to be displayed
 *   - `logo`: The source of the logo image to be displayed
 * 
 * @returns {JSX.Element} A styled card component with navigation functionality.
 */
const CardItem: FunctionComponent<CardProps> = (props) => {
    // Configuring navigation
    const navigation = useNavigation<HomeProps["navigation"]>();

    // Handle the press event to navigate to the "Balance" screen
    const handlePress = () => {
        navigation.navigate("Balance", { ...props });
    };

    return (
        <CardBackground source={card_bg}>
            {/* Touchable area of the card */}
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    {/* Displaying a portion of the account number */}
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }}>
                            ******{props.accountNo.slice(6, 10)}
                        </RegularText>
                    </CardRow>
                    {/* Displaying the balance and logo */}
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText textStyles={{ marginBottom: 5, color: colors.graylight }}>
                                Total Balance
                            </SmallText>
                            <RegularText textStyles={{ fontSize: 19 }}>
                                ${props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;
