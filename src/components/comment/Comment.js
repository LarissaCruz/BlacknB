import StartRating from '../StartRating/StartRating'
import React, { useState } from 'react';
import {ButtonAvalia,DivAvaliacao } from './styles'
import ModalAvalie from '../modal/conteiner/Index';
function Comment() {
    const [modalVisibilidade, setModalVisibilidade] = useState(false);
    return (
        <>
            <h2>Avaliações de Dysoft</h2>
            <ButtonAvalia onClick={modalVisibilidade ? () => setModalVisibilidade(false) : () => setModalVisibilidade(true)} >
                Avalie essa empresa
            </ButtonAvalia>
            {modalVisibilidade ? <ModalAvalie ></ModalAvalie> : null}
            <DivAvaliacao>
                <StartRating />
            </DivAvaliacao>
            <div>
                {[...Array(3)].map(Comment => {
                    return (
                        <>
                            <h3 class="titulo">Excelente empresa</h3>
                            <p>Essa empresa acompanha o empreendedor digital desde o início do projeto até o produto sair no ar.Isso com uma excelente qualidade do produto.</p>
                            <DivAvaliacao>
                                <StartRating/>
                            </DivAvaliacao>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Comment;