import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from '../../services/api';

interface Transactions{
    id: number;
    title: string;
    value: number;
    type: string;
    createAt: Date;
}

export function TransactionsTable (){
    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Títulos</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>{transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.value)}</td>
                                <td>{transaction.type}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </Container>
    );
}