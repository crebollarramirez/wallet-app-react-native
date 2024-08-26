import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import {
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
} from "react-native";

// Styled component for a touchable view with rounded corners and a fixed size
const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`;

// Styled component for an image with rounded corners to fit its container
const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

// Interface defining the properties for the Profile component
interface ProfileProps {
    img: ImageSourcePropType; // The image source to be displayed
    imgStyle?: StyleProp<ImageStyle>; // Optional custom styles for the image
    imgContainerStyle?: StyleProp<ViewStyle>; // Optional custom styles for the container view
    onPress?: ((event: GestureResponderEvent) => void) | undefined; // Optional callback for press events
}

/**
 * Profile Component
 * 
 * A clickable profile image component that displays an image inside a styled touchable container.
 * The component supports optional custom styling for both the image and the container,
 * as well as an optional press handler.
 * 
 * @param {ProfileProps} props - The properties passed to the component, including:
 *   - `img`: The source of the image to display
 *   - `imgStyle`: Optional custom styles for the image
 *   - `imgContainerStyle`: Optional custom styles for the container view
 *   - `onPress`: Optional callback function for handling press events
 * 
 * @returns {JSX.Element} A touchable view containing the image, styled according to the props.
 */
const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img} />
        </StyledView>
    );
};

export default Profile;
