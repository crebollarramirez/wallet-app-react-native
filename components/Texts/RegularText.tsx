import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Colors used for text styling
import { colors } from "../colors";

// Styled component for regular-sized text
const StyledText = styled.Text`
    font-size: 15px;
    color: ${colors.white}; 
    text-align: left; 
    font-family: Lato-Bold; 
`;

// Importing the type definition for text properties
import { TextProps } from "./types";

/**
 * RegularText Component
 * 
 * Renders text with regular size and bold styling. The component allows for additional 
 * customization of text styles through the `textStyles` prop, enabling modifications to 
 * the default styling.
 * 
 * @param {TextProps} props - Properties passed to the component, including:
 *   - `textStyles`: Optional custom styles to override or extend the default text styling
 *   - `children`: The content to be displayed inside the text component
 * 
 * @returns {JSX.Element} A styled text component with default and optionally custom styles.
 */
const RegularText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default RegularText;
