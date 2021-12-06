import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E40;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33cc95;

        --text-title: #363F5F;
        --text-body: #969C83;

        --shape: #fff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        @media (max-width: 1000px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background)
        -web-kit-
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: '400';
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disable]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`