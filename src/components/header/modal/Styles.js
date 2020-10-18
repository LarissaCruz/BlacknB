import styled, { css } from 'styled-components';


export const ConteinerModal= styled.div`
    height: unset;
    width: unset;
    min-width: unset;
    max-height: 80vh;
    overflow-x: auto;
    background:white;
    padding: 1.5rem;
    border-radius: 5px;

`;
export const DivFormulario= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: unset;
    padding: 0px;
    text-align: unset;
    margin: unset;
    >h2{
        margin-bottom: 1rem;
        font-weight: initial; 
    }
    
    >input{
    margin-bottom: 1.5rem;
    border: 0.5px solid rgb(59, 46, 29);
    border-radius: 5px;
    outline: none;
    height: 40px;
    font-family: Montserrat;
    box-sizing: border-box;
    width: auto;
    padding: 0.75rem;
    }
    
`;
export const ButtonConteiner= styled.div`
    margin-bottom: 0.5rem;
    width: max-content;
    padding: 0.75rem 0px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 12px;
    text-decoration: underline;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    color: rgb(191, 133, 20);
    filter: none;
    cursor: pointer;
    ${props => props.variante === 'color' && css`
    color:rgb(43, 43, 43);
    ` }
`;


export const DivImagem= styled.div`
    height: 100vh;
    width: 100%;
    max-height: 150px;
    max-width: 300px;
    margin-bottom: 1.5rem;
    >img{
        width: 100%;
        display: flex;
        flex-direction: column;
        max-width: 300px;
        color: unset;
        padding: 0px;
        text-align: unset;
        margin: unset;
    
    }
    >button{
        width: max-content;
        padding: 0.75rem 0px;
        border-radius: 5px;
        outline: none;
        border: none;
        font-weight: bold;
        font-size: 12px;
        text-decoration: underline;
        overflow-wrap: break-word;
        background-color: rgb(255, 255, 255);
        color: rgb(43, 43, 43);
        filter: none;
        cursor: pointer;
    }
`;
export const DivButton= styled.div`
    width: max-content;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 100%;
`;