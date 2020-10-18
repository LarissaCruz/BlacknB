import styled from 'styled-components';


export const DivHeader = styled.div`
    justify-content: space-between;
    position: sticky;
    position: -webkit-sticky;
    top: -1px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 4px;
    padding: 0.75rem 0em;
    background-color: white;
    display: flex;
    >button.BotaoMenu{
        display:none;
    }

    @media (max-width: 767px) {
        max-width:100vw;
        justify-content: center; 
        >button.BotaoMenu{
            display: flex;
            height: 50px;
            background: none;
            border: none;
            width: auto;
            position: absolute;
            right: 20px;
            top: 20px;
            display: block;
            padding: 5px 0;
            z-index: 2;
            cursor: pointer;
        }         
   }
`;
export const LinkLogo = styled.a`
    cursor: pointer;
    >img{
        width: 200px;
        padding: 0.25rem 2em; 
    }
`;

export const DivOption = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: auto;
    @media (max-width: 767px) {
        display:none;   
       
    }
   
`;


export const BtnMaps = styled.button`
    display: flex;
    border: none;
    background: none;
    color: rgb(191, 133, 20);
    font-weight: bold;
    padding: 0.5rem 0px; 
`;

export const IconeBtn = styled.div`
    padding: 0.5rem 0px;
    margin: 0px 0.5rem 0px 0px;
`;

export const Text = styled.p`
    margin-right: 0.5rem;
`;

export const BtnLogin = styled.button`
    width: max-content;
    padding: 0.75rem 1.75rem;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    color: rgb(43, 43, 43);
    filter: none;
    cursor: pointer;
    margin-right: 2rem;
`;