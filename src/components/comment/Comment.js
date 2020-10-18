import StartRating from '../StartRating/StartRating'
import React, { useState } from 'react';
import {ButtonModal,DivStar } from './styles'
import ModalAvalie from '../modal/conteiner/Index';
function Comment() {
    const [modalVisibilidade, setModalVisibilidade] = useState(false);
    return (
        <>
            <h2>Avaliações de Dysoft</h2>
            <ButtonModal onClick={modalVisibilidade ? () => setModalVisibilidade(false) : () => setModalVisibilidade(true)} >
                Avalie essa empresa
            </ButtonModal>
            {modalVisibilidade ? <ModalAvalie ></ModalAvalie> : null}
            <DivStar>
                <StartRating />
            </DivStar>
            <div>
                {[...Array(3)].map(Comment => {
                    return (
                        <>
                            <h3 class="titulo">Excelente empresa</h3>
                            <p>Essa empresa acompanha o empreendedor digital desde o início do projeto até o produto sair no ar.Isso com uma excelente qualidade do produto.</p>
                            <DivStar>
                                <StartRating/>
                            </DivStar>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Comment;