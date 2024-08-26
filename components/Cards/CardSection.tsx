import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Importing the CardItem component
import CardItem from "./CardItem";

// Styled component for the FlatList
// - Sets up the layout for the list of cards, including padding and full-width
const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    padding-left: 25px;
    padding-bottom: 15px;
`;

// Importing types for the CardSection component props
import { CardSectionProps } from "./types";

/**
 * CardSection Component
 * 
 * A section component that renders a horizontal list of CardItem components.
 * It uses a FlatList to display the cards with horizontal scrolling.
 * 
 * @param {CardSectionProps} props - The properties passed to the component, including:
 *   - `data`: An array of card data objects used to render each CardItem
 * 
 * @returns {JSX.Element} A horizontal list of cards.
 */
const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <CardList
            data={props.data} // Data for the list, passed via props
            horizontal={true} // Enables horizontal scrolling
            showHorizontalScrollIndicator={false} // Hides the horizontal scroll indicator
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: "center",
            }} // Adds right padding and centers the content vertically
            keyExtractor={({ id }: any) => id.toString()} // Unique key for each item
            renderItem={({ item }: any) => <CardItem {...item} />} // Renders each card using CardItem component
        />
    );
};

export default CardSection;
