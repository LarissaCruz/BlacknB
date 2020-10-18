import styled, { css } from 'styled-components';
export const Formulario = styled.form`
    max-width: 350px;
    padding: 1rem 0px 1.5rem;
    >form div{
        width: 100%;
        color: unset;
        padding: 0px;
        text-align: unset;
        margin: unset;
    }
`;
export const DivNota  = styled.div`
    >h3{
        margin-bottom: 0.25rem;
    }
`;
export const Iconvaliacao = styled.div`
    margin-bottom: 0.5rem;
`;
export const DivDescricao = styled.div`
    margin-bottom: 0.5rem;
    >input{
        border: 0.5px solid rgb(59, 46, 29);
        border-radius: 5px;
        outline: none;
        height: 40px;
        font-family: Montserrat;
        box-sizing: border-box;
        width: 100%;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
    }`;
export const TextLabel = styled.div`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    font-size: 12px;
    display: block;
    margin-bottom: 0.25rem;
    opacity: 1;
`;
export const DivBarraMenu = styled.div`
    display: block;
    width: 100%;
    padding: 0 var(--ck-spacing-small);
    border:1px solid #c4c4c4;
    background:#fafafa;
`;

export const BtnMenu = styled.button`
    background: none;
    border:none;
    margin:1.5% 0%;
`;

export const TextArea = styled.div`
    width: 100%;
    height: 40px;
    border:1px solid #c4c4c4;
    border-top:none;
    margin-bottom: 1.5rem;
    p{
        margin:0px;
    }
`;

export const Button= styled.div`
    max-width: 100%;
    padding: 0.75rem 1.75rem;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    overflow-wrap: break-word;
    background-color: rgb(191, 133, 20);
    color: rgb(255, 255, 255);
    filter: none;
    cursor: pointer;
    text-align: center;
    ${props => props.color === 'Claro' && css`
        background: none;
        color:rgb(43, 43, 43);
    ` }
`;