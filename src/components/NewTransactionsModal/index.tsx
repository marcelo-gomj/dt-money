import Modal from 'react-modal';
import { Form, TransactionsButtonType, ButtonsType } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {useState, FormEvent} from 'react';
import { api } from '../../services/api';


interface modalTransactions {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal ({isOpen, onRequestClose} : modalTransactions) {
    const [type, setType ] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateTransaction (event: FormEvent) {
        event.preventDefault();

        const datas = {
            title,
            value,
            type,
            category
        }

        api.post('transactions', datas)

    }
    
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
            <Form onSubmit={handleCreateTransaction}>
                <h2>Cadastrar transacão</h2>
                <input 
                    type="text"  
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input 
                    type="text" 
                    placeholder="Valor" 
                    value={value}
                    onChange={(event) => setValue(Number(event.target.value))}
                />

                <TransactionsButtonType >
                    <ButtonsType 
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg}  alt="Entradas" />
                        <span>Entradas</span>
                    </ButtonsType>
                    <ButtonsType 
                        type="button"
                        className={type === 'deposit'  ? 'active' : ''}
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg}  alt="Saídas" />
                        <span>Saídas</span>
                        
                    </ButtonsType>
                </TransactionsButtonType >

                <input 
                    placeholder="Categoria" 
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Form>
        </Modal>
    );
}