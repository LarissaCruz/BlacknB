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

export const DivSchedules = styled.span`
    max-width: 250px;
    justify-content: space-between;
    display: flex;

`;