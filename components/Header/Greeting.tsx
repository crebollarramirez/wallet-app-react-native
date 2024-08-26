import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";
import { colors } from "../colors";

// Importing custom text components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// Styled component for the container view
// - Aligns its child components in a column and centers them vertically
const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

// Interface defining the properties for the Greeting component
interface GreetingProps {
    mainText: string; // The main text to be displayed, typically as a heading
    subText: string; // The subtext to be displayed, typically as a supporting line
    mainTextStyles?: StyleProp<TextStyle>; // Optional custom styles for the main text
    subTextStyles?: StyleProp<TextStyle>; // Optional custom styles for the subtext
}

/**
 * Greeting Component
 * 
 * Displays a greeting message with a main text and a subtext. Allows for optional custom styling
 * for both text elements.
 * 
 * @param {GreetingProps} props - The properties passed to the component, including:
 *   - `mainText`: The main greeting message text
 *   - `subText`: The additional message or subtitle
 *   - `mainTextStyles`: Optional custom styles for the main text
 *   - `subTextStyles`: Optional custom styles for the subtext
 * 
 * @returns {JSX.Element} A styled greeting component with customizable text styles.
 */
const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (
        <StyledView>
            {/* Main text displayed with optional custom styles */}
            <RegularText textStyles={[
                {
                    color: colors.secondary, // Default color for the main text
                    fontSize: 22, // Default font size for the main text
                }, 
                props.mainTextStyles // Custom styles if provided
            ]}>
                {props.mainText}
            </RegularText>
            {/* Subtext displayed with optional custom styles */}
            <SmallText textStyles={[
                {
                    color: colors.graydark, // Default color for the subtext
                },
                props.subTextStyles // Custom styles if provided
            ]}>
                {props.subText}
            </SmallText>
        </StyledView>
    );
};

export default Greeting;
