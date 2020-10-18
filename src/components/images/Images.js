import React, { useState } from 'react';
import { DivGrupoImagem} from './styles';
import ModalFoto from '../modal/Imagem/Index';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
function Images(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
             <button onClick={() => setModalIsOpen(true)} >
             <img  class="Grupoimagem" src={'http://localhost:1337' + props.url}/>
              </button>
              {modalIsOpen ? <ModalFoto onClose={() => setModalIsOpen(false)} ></ModalFoto> : null}
              <DivGrupoImagem>
                <img src="https://blacknb.s3.eu-west-3.amazonaws.com/thumbnail_blob_5537fe7771.jpeg" />
                <img src="https://blacknb.s3.eu-west-3.amazonaws.com/thumbnail_blob_75444afc8d.jpeg"/>
              </DivGrupoImagem>
        </>
    )
}
export default Images 