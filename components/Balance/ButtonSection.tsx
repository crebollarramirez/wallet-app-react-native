import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

// Importing custom components and utilities
import RegularButton from "../Buttons/RegularButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../colors";

// Importing types for navigation
import { RootStackParamList } from "../../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

// Styled component for the button section background
// - Takes up full width of the parent container
// - Centers its content horizontally
// - Flex: 1 to allow it to fill the available space
const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

/**
 * ButtonSection Component
 * 
 * This functional component displays a button section with a "Cancel" button.
 * When the button is pressed, it navigates the user to the "Home" screen.
 * 
 * @returns {JSX.Element} A styled section containing a button that triggers navigation.
 */
const ButtonSection: FunctionComponent = () => {
    // Using the useNavigation hook to access the navigation object
    const navigation = useNavigation();

    return (
        <ButtonSectionBackground>
            {/* 
                RegularButton Component:
                - Displays a button with custom styles.
                - When pressed, it navigates to the "Home" screen.
                - The button contains the text "Cancel" and an Ionicons icon.
            */}
            <RegularButton btnStyles={{ width: "50%" }} onPress={() => { navigation.navigate("Home") }}>
                Cancel <Ionicons size={17} color={colors.white} name="card" />
            </RegularButton>
        </ButtonSectionBackground>
    );
};

export default ButtonSection;
