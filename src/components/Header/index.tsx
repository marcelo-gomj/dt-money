import logoImg from '../../assets/logo.svg';
import { Container, Content } from '../Header/styles';
import { GlobalStyle } from '../styles/global'


export function Header(){
    return (
        <Container>
            <Content>
                <GlobalStyle />
                <img src={logoImg} alt="dt money logo"/>
                <button type="button">
                    Nova transacão
                </button>
            </Content>
        </Container>
    )
}