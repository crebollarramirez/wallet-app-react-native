import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

// Defining the types for text components
/**
 * TextProps Interface
 * 
 * This interface defines the properties that can be passed to text components to 
 * customize their appearance and content.
 * 
 * @interface TextProps
 *
 * @property {StyleProp<TextStyle>} [textStyles] - Optional. Custom styles to be applied to the text component, allowing for modifications or extensions of the default styling.
 * @property {ReactNode} children - Required. The content to be displayed inside the text component. This can be any valid React node (e.g., string, number, JSX element).
 */
export interface TextProps {
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
}