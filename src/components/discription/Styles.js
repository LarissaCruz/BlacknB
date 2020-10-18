import styled from 'styled-components';
export const Content = styled.div`
    grid-template-columns: 5fr 6fr;
    display: grid;
    gap: 2rem;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 2rem;     
   }
`;
export const FirstColumn = styled.div`
    >button {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0px
    }
    >p{
        margin:0px;
        margin-bottom: 1.5rem; 
    }
    >h3{
        margin:0px;
        margin-bottom: 0.25rem;
    }

    >button img{
        width: 100%;
        border-radius: 5px;
        display: block;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
        
    }
`;
export const SencondColum  = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 0px;
    margin-bottom: 3rem;
    
`;
export const DivParagraph = styled.span`
    margin-bottom: 0.1rem;
    >p{
        margin-bottom: 0.3rem;
        margin-top:0rem;
        >a{
            color:initial;
        }
    }
    >form div.form {
        display: flex;
    }
    >form div.form input {
        border: 0.5px solid rgb(59, 46, 29);
        border-radius: 5px;
        font-family: Montserrat;
        box-sizing: border-box;
        width: 100%;
        padding: 0.75rem;
        margin: 0px 1rem 0px 0px;
    }
    >form div.form button {
        
        padding: 0.75rem 1.75rem;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        background-color: rgb(59, 46, 29);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
    >form div.Exemplo p {
        margin-top: 1rem;
    }
   
`;
export const DivSchedules = styled.span`
    max-width: 250px;
    justify-content: space-between;
    display: flex;

`;