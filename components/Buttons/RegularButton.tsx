import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";

// Importing colors and text components
import { colors } from "../colors";
import RegularText from "./../Texts/RegularText";

// Styled component for the button view
// - Creates a TouchableOpacity that:
//   - Centers its content horizontally
//   - Has a background color defined by `colors.primary`
//   - Takes up the full width of its container
//   - Adds padding and rounded corners for visual appeal
const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;

// Type definition for the button props
interface ButtonProps {
    // Optional custom styles for the button's view (container)
    btnStyles?: StyleProp<ViewStyle>;
    
    // Function to handle the button press event
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    
    // Optional custom styles for the button's text
    textStyles?: StyleProp<TextStyle>;
    
    // Children elements to be rendered inside the button (usually text or icons)
    children: React.ReactNode;
}

/**
 * RegularButton Component
 * 
 * A customizable button component that allows for custom styles, text, and an onPress handler.
 * It renders a TouchableOpacity with a child RegularText component inside, which is styled according to the passed props.
 * 
 * @param {ButtonProps} props - The properties passed to the component, including:
 *   - `btnStyles`: Optional custom styles for the button's container
 *   - `onPress`: Function to handle the button press event
 *   - `textStyles`: Optional custom styles for the button's text
 *   - `children`: Elements to be rendered inside the button, usually text or icons
 * 
 * @returns {JSX.Element} A styled button with customizable text and press functionality.
 */
const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        // Rendering the button view with the onPress handler and optional custom styles
        <ButtonView onPress={props.onPress} style={props.btnStyles}>
            {/* Rendering the button's text with optional custom styles */}
            <RegularText textStyles={props.textStyles}>
                {props.children}
            </RegularText>
        </ButtonView>
    );
};

export default RegularButton;
