import {BottomModal ,ModalContent} from './Styles'
import React from 'react'
const Modal = ({ onClose = () =>{},children})=>{
    return(
        <BottomModal  >
            <ModalContent>
                 <img src="https://blacknb.s3.eu-west-3.amazonaws.com/blob_5537fe7771.jpeg"/>
                 <button onClick={onClose}>Fechar</button>
            </ModalContent>
        </BottomModal >

    );
}
    
export default Modal;
