import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Colors used for text styling
import { colors } from "../colors";

// Styled component for small-sized text
const StyledText = styled.Text`
    font-size: 13px; 
    color: ${colors.gray}; 
    text-align: left; 
    font-family: Lato-Regular;
`;

// Importing the type definition for text properties
import { TextProps } from "./types";

/**
 * SmallText Component
 * 
 * Renders small-sized text with regular styling. The component allows for additional 
 * customization of text styles through the `textStyles` prop, which can be used to 
 * modify or extend the default styling.
 * 
 * @param {TextProps} props - Properties passed to the component, including:
 *   - `textStyles`: Optional custom styles to override or extend the default text styling
 *   - `children`: The content to be displayed inside the text component
 * 
 * @returns {JSX.Element} A styled text component displaying small-sized text with default or custom styles.
 */
const SmallText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>
}

export default SmallText;
