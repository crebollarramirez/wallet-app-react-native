import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

// Importing colors and text components for styling
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";

// Types for props
import { TransactionProps } from "./types";

// Styled component for arranging transaction items in a row
const TransactionRow = styled.View`
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 
    margin-bottom: 25px; 
`;

// Styled component for the left side of the transaction row
const LeftView = styled.View`
    flex-direction: row; 
    justify-content: flex-start;
    height: 100%; 
    align-items: center; 
    flex: 2;
`;

// Styled component for the right side of the transaction row
const RightView = styled.View`
    flex: 1;
`;

/**
 * TransactionItem Component
 * 
 * Displays a single transaction item with an avatar, title, subtitle, amount, and date.
 * The component is divided into two sections: the left section displays the transaction avatar
 * and text details, while the right section displays the amount and date of the transaction.
 * 
 * @param {TransactionProps} props - Properties passed to the component, including:
 *   - `art`: An object containing `background` and `icon` for the avatar
 *   - `title`: The main title of the transaction
 *   - `subtitle`: A subtitle or additional information about the transaction
 *   - `amount`: The amount of the transaction
 *   - `date`: The date of the transaction
 * 
 * @returns {JSX.Element} A row displaying the transaction details.
 */
const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi 
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{ marginLeft: 10 }}>
                    <RegularText 
                        textStyles={{
                            color: colors.secondary,
                            textAlign: "left",
                            marginBottom: 5,
                        }}>
                        {props.title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: "left",
                            color: colors.graydark
                        }}>
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText 
                    textStyles={{
                        color: colors.secondary,
                        textAlign: "right",
                        marginBottom: 5,
                    }}>
                    {props.amount}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: "right",
                        color: colors.graydark
                    }}>
                    {props.date}
                </SmallText>
            </RightView>
        </TransactionRow>
    );
};

export default TransactionItem;
