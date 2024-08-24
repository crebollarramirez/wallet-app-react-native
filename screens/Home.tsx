import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import {Container} from "../components/shared";
import {colors} from "../components/colors"
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

//types
import { RootStackParamList } from "../navigators/RootStack"
import { StackScreenProps } from "@react-navigation/stack"

export type Props = StackScreenProps<RootStackParamList, "Home">;

// card logos
import logo1 from "./../assets/cards/visa_white.png"
import logo2 from "./../assets/cards/mc.png"

// images used in the send money
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";



const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
    // card data for testing
    const cardsData = [
        {
            id: 1,
            accountNo: "5423523451",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "5423573051",
            balance: 54,
            alias: "Monies",
            logo: logo2,
        },
        {
            id: 3,
            accountNo: "5401523451",
            balance: 9000.45,
            alias: "School Prepaid",
            logo: logo2,
        },
    ];

    const transactionData = [
        {
            id: 1,
            amount: "-$123.33",
            date: "15 Aug 2024",
            title: "Taxi",
            subtitle: "Uber",
            art:{
                background: colors.primary,
                icon: "car",
            },
        },
        {
            id: 2,
            amount: "-$88.44",
            date: "2 June 2024",
            title: "Shopping",
            subtitle: "Target",
            art:{
                background: colors.graydark,
                icon: "cart",
            },
        },
        {
            id: 3,
            amount: "-$548.83",
            date: "11 Aug 2024",
            title: "Travel",
            subtitle: "Pane",
            art:{
                background: colors.primary,
                icon: "airplane",
            },
        },
    ];

    const sendMoneyData = [
        {
            id: 1,
            amount: "2450.56",
            name: "Coby Andoh",
            background: colors.tertiary,
            img: portrait1,
        },
        {
            id: 2,
            amount: "250.56",
            name: "Alex James",
            background: colors.primary,
            img: portrait2,
        },
        {
            id: 3,
            amount: "845",
            name: "Montery Kanda",
            background: colors.accent,
            img: portrait3,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark"/>
            <CardSection data={cardsData}/>
            <TransactionSection data={transactionData}/>
        </HomeContainer>
        
    );
};

export default Home;