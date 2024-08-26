import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Importing Ionicons for icons
import { Ionicons } from "@expo/vector-icons";

// Importing colors for styling
import { colors } from "../colors";

// Types for props
import { TransactionAviProps } from "./types";

// Styled component for the avatar container
const StyledView = styled.View`
    height: 45px; 
    width: 45px; 
    border-radius: 10px;
    justify-content: center; 
    align-items: center;
`;

/**
 * TransactionAvi Component
 * 
 * Displays an icon inside a styled container, which represents a transaction avatar. 
 * The background color and icon are customizable through props.
 * 
 * @param {TransactionAviProps} props - Properties passed to the component, including:
 *   - `background`: The background color of the avatar container
 *   - `icon`: The name of the Ionicon to be displayed
 * 
 * @returns {JSX.Element} A styled view containing the specified icon with customizable background color.
 */
const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView style={{ backgroundColor: props.background }}>
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </StyledView>
    );
};

export default TransactionAvi;
