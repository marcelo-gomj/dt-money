import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable (){
    const transactions = useContext(TransactionsContext)
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
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </Container>
    );
}