import { CardProps } from "./../Cards/types";

// Interface for AmountProps
// - Defines the shape of props expected by components displaying an amount or balance
// - `balance`: A number representing the balance amount to be displayed
export interface AmountProps {
    balance: number;
}

// Interface for BalanceCardProps
// - Extends from `CardProps`, meaning it includes all the properties defined in `CardProps`
// - Can be used to type the props of components related to balance cards, combining both `CardProps` and any additional properties
export interface BalanceCardProps extends CardProps {}
