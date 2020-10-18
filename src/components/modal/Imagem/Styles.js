import styled from 'styled-components';
export const FundoModal  = styled.div`
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center
`;

export const ModalConteudo = styled.div`
display: flex;
flex-direction: column-reverse;
 
    >button{
       
        border: none;
        background: none;
        color: white;
        font-weight: bold;
        text-decoration: underline;
        font-size: 1rem;
        width: max-content;
        cursor: pointer;
    }
`;