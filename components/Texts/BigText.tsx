import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Colors used for text styling
import { colors } from "../colors";

// Styled component for large text with bold styling
const StyledText = styled.Text`
    font-size: 37px; 
    color: ${colors.white}; 
    text-align: left; 
    font-family: Lato-Bold;
`;

// Importing the type definition for text properties
import { TextProps } from "./types";

/**
 * BigText Component
 * 
 * Renders large, bold text with a default styling. The component allows for additional 
 * customization of text styles through the `textStyles` prop, which can be used to override 
 * or extend the default styling.
 * 
 * @param {TextProps} props - Properties passed to the component, including:
 *   - `textStyles`: Optional custom styles that can override or extend the default text styling
 *   - `children`: The content to be displayed inside the text component
 * 
 * @returns {JSX.Element} A styled text component displaying large, bold text with optional custom styles.
 */
const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default BigText;
