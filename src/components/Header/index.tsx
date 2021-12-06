import logoImg from '../../assets/logo.svg';
import { Container, Content } from '../Header/styles';
import {useState } from 'react';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money logo"/>
                <button onClick={onOpenNewTransactionModal} type="button">
                    Nova transacão
                </button>
            </Content>
        </Container>
    )
}