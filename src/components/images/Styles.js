import styled from 'styled-components';

export const DivGroupImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0px;
    padding: 1rem;
    >img{
        margin-right: 1rem;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    }
    >h3{
        margin-top:0.3rem;
        margin-bottom:0.3rem;
    }
`;