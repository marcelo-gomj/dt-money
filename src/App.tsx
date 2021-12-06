import { GlobalStyle } from "./components/styles/global";
import { Header } from './components/Header/index';
import { Dashboard } from "./components/Dashboard/index";
import { createServer } from 'miragejs';
import Modal from 'react-modal';
import { useState } from 'react';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('transactions', () => {
      return [{
        id: 2,
        name: 'Marcelo'
      }]
    })
  }
})

export function App() {
    const [modalTransactions, setModalTransactions] = useState(false);

    function handleOpenModalTransactions(){
        setModalTransactions(true);
    }

    function handleCloseModalTransactions(){
        setModalTransactions(false);
    }

    return(
        <>
            <Header onOpenNewTransactionModal={handleOpenModalTransactions} />

            <Dashboard />

            <Modal 
                isOpen={modalTransactions} 
                onRequestClose={handleCloseModalTransactions}
            />

            <GlobalStyle />

        </>
  );
}