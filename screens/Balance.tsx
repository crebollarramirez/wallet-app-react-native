import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import {colors} from "../components/colors";
import { Container } from "../components/shared";
import BalanceCardSection from "../components/Balance/BalanceCardSection";

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
import AmountSection from "../components/Balance/AmountSection";
import BalanceCard from "../components/Balance/BalanceCard";
import ButtonSection from "../components/Balance/ButtonSection";

const BalanceContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    padding: 25px;
    flex: 1;
`;


type Props = StackScreenProps<RootStackParamList, "Balance">;

const Balance: FunctionComponent<Props> = ({ route }) => {
    return (
        <BalanceContainer>
            <StatusBar style="dark"/>
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params}/>
            <ButtonSection />
        </BalanceContainer>
    );
}

export default Balance;