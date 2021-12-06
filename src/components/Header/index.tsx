import logoImg from '../../assets/logo.svg';
import { Container, Content } from '../Header/styles';

export function Header(){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money logo"/>
                <button type="button">
                    Nova transacão
                </button>
            </Content>
        </Container>
    )
}