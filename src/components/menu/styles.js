import styled,{css} from 'styled-components';

export const BarMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: unset;
    text-align: unset;
    margin: unset;
`;
export const BtnVoltar = styled.button`
    width: max-content;
    padding: 0.75rem 0px;
    border: none;
    font-weight: bold;
    text-decoration: underline;
    background-color: rgb(255, 255, 255);
    color: rgb(43, 43, 43);
`;
export const BarInfo = styled.div`
`;
export const Title = styled.div`
>h1{
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
}
`;
export const DivAvaliacao = styled.span`
    >h3{
        display: inline;
        margin-right:0.65%;
        padding:0px;
    }
`;
export const IconeAvaliacao = styled.span`
`;
export const BtnMenu = styled.div`
    border-bottom: 0.5px solid rgb(191, 133, 20);
    margin-bottom: 2rem;
    margin-top: 0.6rem;
`;
export const BtnComponente = styled.button`
    border: none;
    padding: 1rem;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    color:#c4c4c4;
    background: unset;
    ${props => props.variante === 'color' && css`
    background: none;
    color:rgb(191, 133, 20);
` }
`;


export const IconeNumerico = styled.span`
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 1.15rem;
    height: 1.15rem;
    border-radius: 50%;
    background: #c4c4c4;
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    color: rgb(255, 255, 255);
    margin: 0px 0.5rem 0px 0px;
    
`;
