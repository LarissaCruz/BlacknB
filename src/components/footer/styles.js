import styled from 'styled-components';
export const Footer = styled.div`
    whidth:100%;
    background-color: rgb(59, 46, 29);
    color: rgb(255, 255, 255);
    padding: 1.5rem 3rem;
    font-family: Montserrat, sans-serif;
    bottom: 0px;
`;
export const MenuRodape=styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
`;
export const DivMenu =styled.div`
    align-items: unset;
    flex-direction: row;
    margin-right: 1rem;
    margin-bottom: 1rem;
    >span{
        font-size: 12px;
        line-height: 1.5;
        margin: 0px 1.5rem 0px 0px; 
    }
    >a{
        margin-right: 1rem;
        color: white;
        text-decoration: none;
        cursor: pointer;
        line-height: 1.5;
        font-size: 12px;
    } 
`;
export const DivIconeSocial =styled.div`
display: flex;
align-items: center;
    >a{
        margin:0rem;
        margin-right: 1rem;
        color: white;
        text-decoration: none;
        cursor: pointer;
        line-height: 1.5;
        font-size: 12px;
    }
    >select{
        border: 0.5px solid rgb(59, 46, 29);
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        outline: none;
        min-height: 40px;
        font-family: Montserrat, sans-serif;
        box-sizing: border-box;
        width: auto;
        padding: 0.75rem;
    }
`;