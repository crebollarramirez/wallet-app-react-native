import {ReactNode} from "react"
import {StyleProp, TextStyle} from "react-native"


// setting the types
export interface TextProps{
    textStyles?: StyleProp<TextStyle>
    children: ReactNode;
}