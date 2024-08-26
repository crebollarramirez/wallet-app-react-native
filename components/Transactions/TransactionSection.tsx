import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// Importing colors and text components for styling
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

// Types for props
import { TransactionSectionProps } from "./types";

// Styled component for the background of the transaction section
const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 25px; 
    padding-top: 5px; 
    flex: 2; 
`;

// Styled component for the header row in the transaction section
const TransactionRow = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 
`;

// Styled component for the FlatList that displays the list of transactions
const TransactionList = styled.FlatList`
    width: 100%; 
`;

/**
 * TransactionSection Component
 * 
 * Displays a section with a header and a list of transactions.
 * The header includes the title "Transaction" and a "Recent" label with a down caret icon.
 * The list displays transaction items using the `TransactionItem` component.
 * 
 * @param {TransactionSectionProps} props - Properties passed to the component, including:
 *   - `data`: An array of transaction objects to be displayed in the list
 * 
 * @returns {JSX.Element} A section with a header and a list of transactions.
 */
const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                    Transaction
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.graydark} />
                </SmallText>
            </TransactionRow>
            <TransactionList
                data={props.data}
                showsVerticalScrollIndicator={false} // Hides the vertical scroll indicator
                contentContainerStyle={{
                    paddingBottom: 25, // Bottom padding for the content container
                }}
                keyExtractor={({ id }: any) => id.toString()} // Extracts key for each item
                renderItem={({ item }: any) => <TransactionItem {...item} />} // Renders each transaction item
            />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;
