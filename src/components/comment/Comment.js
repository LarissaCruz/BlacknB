import StartRatingIcon from '../StartRating/StartRating'
import React, { useState } from 'react';
import ModalAvalie from '../modal/conteiner/Index';
import styled from 'styled-components';

export const ModalButton = styled.button`
    padding: 0.75rem 0px;
    border: none;
    font-weight: bold;
    font-size: 14px;
    text-decoration: underline;
    background-color: rgb(255, 255, 255);
    color: rgb(191, 133, 20);
    cursor: pointer;
    margin-bottom: 1rem;
`;
export const StartRatingDiv = styled.div`
    >span{
        display: inline;
    }
`;

export default function Comment() {
    const [visibleModal, setVisibleModal] = useState(false);
    return (
        <>
            <h2>Avaliações de Dysoft</h2>
            <ModalButton onClick={() => setVisibleModal(!visibleModal)} >
                Avalie essa empresa
            </ModalButton>
            {visibleModal ? <ModalAvalie ></ModalAvalie> : null}
            <StartRatingDiv>
                <StartRatingIcon />
            </StartRatingDiv>
            <div>
                {[...Array(3)].map(commentList => {
                    return (
                        <>
                            <h3 class="titulo">Excelente empresa</h3>
                            <p>Essa empresa acompanha o empreendedor digital desde o início do projeto até o produto sair no ar.Isso com uma excelente qualidade do produto.</p>
                            <StartRatingDiv>
                                <StartRatingIcon/>
                            </StartRatingDiv>
                        </>
                    );
                })}
            </div>
        </>
    );
}

