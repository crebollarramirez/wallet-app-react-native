/**
 * Represents a single transaction.
 * @property id - Unique identifier for the transaction.
 * @property title - Main title of the transaction.
 * @property subtitle - Additional information about the transaction.
 * @property amount - The amount involved in the transaction.
 * @property date - Date when the transaction occurred.
 * @property art - Visual elements related to the transaction.
 * @property art.icon - Icon representing the transaction type.
 * @property art.background - Background color for the icon.
 */
export interface TransactionProps {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    date: string;
    art: {
        icon: string;
        background: string;
    }
}

/**
 * Props for a section displaying multiple transactions.
 * @property data - Array of transactions to display.
 */
export interface TransactionSectionProps {
    data: Array<TransactionProps>
}

/**
 * Props for a transaction avatar component.
 * @property icon - Icon representing the transaction type.
 * @property background - Background color for the icon.
 */
export interface TransactionAviProps {
    icon: any;
    background: string;
}
