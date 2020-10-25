import React, { useState } from 'react';
import { DivGroupImage} from './styles';
import ModalPhoto from '../modal/Imagem/Index';

function Images(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
          <button onClick={() => setModalIsOpen(true)} >
               <img src={'http://localhost:1337' + props.url}/>
          </button>
          {modalIsOpen ? <ModalPhoto onClose={() => setModalIsOpen(false)} ></ModalPhoto> : null}
            <DivGroupImage>
              <img src="https://blacknb.s3.eu-west-3.amazonaws.com/thumbnail_blob_5537fe7771.jpeg" />
              <img src="https://blacknb.s3.eu-west-3.amazonaws.com/thumbnail_blob_75444afc8d.jpeg"/>
            </DivGroupImage>
        </>
    )
}
export default Images 