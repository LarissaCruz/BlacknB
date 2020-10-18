import {FundoModal ,ModalConteudo} from './Styles'
import React from 'react'
const Modal = ({ onClose = () =>{},children})=>{
    return(
        <FundoModal  >
            <ModalConteudo>
                 <img   src="https://blacknb.s3.eu-west-3.amazonaws.com/blob_5537fe7771.jpeg"/>
                
                 <button onClick={onClose}>Fechar</button>
            </ModalConteudo>
    </FundoModal >

    );
}
    
export default Modal;
