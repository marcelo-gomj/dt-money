import { GlobalStyle } from "./components/styles/global";
import { Header } from './components/Header/index';
import { Dashboard } from "./components/Dashboard/index";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import  { TransactionsProvider } from "./TransactionsContext"

Modal.setAppElement('#root');

export function App() {
    const [modalTransactions, setModalTransactions] = useState(false);

    function handleOpenModalTransactions(){
        setModalTransactions(true);
    }

    function handleCloseModalTransactions(){
        setModalTransactions(false);
    }

    return(
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenModalTransactions} />

            <Dashboard />

            <NewTransactionsModal 
                isOpen={modalTransactions} 
                onRequestClose={handleCloseModalTransactions}
            />

            <GlobalStyle />
        </TransactionsProvider>
  );
}