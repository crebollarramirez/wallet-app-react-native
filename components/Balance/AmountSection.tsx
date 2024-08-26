import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Importing colors and text components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// Importing the type definition for props
import { AmountProps } from "./types";

// Styled component for the background of the amount section
// - Takes up full width of the parent container
// - Adds padding at the top and centers content
// - Flex: 1 to allow it to grow and fill available space
const AmountSectionBackground = styled.View`
    width: 100%;
    padding-top: 5px;
    align-items: center;
    flex: 1;
`;

/**
 * AmountSection Component
 * 
 * This functional component displays the total balance amount.
 * 
 * @param {AmountProps} props - The properties passed to the component, including the balance value.
 * 
 * @returns {JSX.Element} A view component with two text elements: one showing the label "Total Balance" and another showing the actual balance.
 */
const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return (
        <AmountSectionBackground>
            {/* SmallText component for the "Total Balance" label */}
            <SmallText textStyles={{
                color: colors.secondary,
                marginBottom: 15,
            }}>
                Total Balance
            </SmallText>

            {/* RegularText component for displaying the balance amount */}
            <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
                {props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;
