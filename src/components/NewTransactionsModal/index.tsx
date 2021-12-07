import Modal from 'react-modal';
import { Form, TransactionsButtonType } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface modalTransactions {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal ({isOpen, onRequestClose} : modalTransactions) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg}  alt="Fechar modal" />
            </button>
            <Form >
                <h2>Cadastrar transacão</h2>
                <input type="text"  placeholder="Título"/>
                <input type="text" placeholder="Valor" />

                <TransactionsButtonType >
                    <button type="button">
                        <img src={incomeImg}  alt="Entradas" />
                        <span>Entradas</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg}  alt="Saídas" />
                        <span>Saídas</span>
                    </button>
                </TransactionsButtonType >

                <input placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Form>
        </Modal>
    );
}