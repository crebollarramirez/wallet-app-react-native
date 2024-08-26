import { ImageSourcePropType } from "react-native";

// Interface defining the properties for individual card items
export interface CardProps {
    id: number; // Unique identifier for the card
    accountNo: string; // The account number to be partially displayed on the card
    balance: number; // The balance amount to be displayed on the card
    alias?: string; // Optional alias or name associated with the card
    logo: ImageSourcePropType; // The source of the logo image to be displayed on the card
}

// Interface defining the properties for the card section
export interface CardSectionProps {
    data: Array<CardProps>; // Array of card data objects to be rendered in the card section
}
