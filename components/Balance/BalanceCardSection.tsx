import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Importing types for the component props
import { BalanceCardProps } from "./types";

// Importing the custom BalanceCard component
import BalanceCard from "./BalanceCard";

// Styled component for the section background
// - Takes up full width of the parent container
// - Centers its content horizontally
// - Flex: 2 to control its size relative to other flex items
const BalanceCardSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 2;
`;

/**
 * BalanceCardSection Component
 * 
 * This functional component serves as a wrapper for the BalanceCard component, 
 * providing a styled background and layout for the card.
 * 
 * @param {BalanceCardProps} props - The properties passed to the BalanceCard component, 
 * including account number, balance, and logo source.
 * 
 * @returns {JSX.Element} A styled section that contains and displays the BalanceCard component.
 */
const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            {/* Rendering the BalanceCard component with all received props */}
            <BalanceCard {...props}/>
        </BalanceCardSectionBackground>
    );
};

export default BalanceCardSection;