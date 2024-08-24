import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

// custom components
import RegularButton from "../Buttons/RegularButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";

//types
import { RootStackParamList } from "../../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack"

const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: FunctionComponent = () => {
    const navigation = useNavigation();
    return (
        <ButtonSectionBackground>
            <RegularButton btnStyles={{width: "50%"}} onPress={() => {navigation.navigate("Home")}}>
                Cancel <Ionicons size={17} color={colors.white} name="card"/>
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default ButtonSection;
