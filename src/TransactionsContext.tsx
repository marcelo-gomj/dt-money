import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

interface Transactions{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: Date;
}

type TransactionsInput = Omit<Transactions, 'id' | 'createAt'>;

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextDate {
    transactions : Transactions[],
    createTransaction: (transactions: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextDate>({} as TransactionsContextDate);

export function TransactionsProvider ({ children } : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    async function createTransaction (transactionsInput : TransactionsInput) {
        const response = await api.post('/transactions', {
            ...transactionsInput, 
            createAt: new Date()});
        
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}