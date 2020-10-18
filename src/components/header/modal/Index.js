import { TextLabel, Button } from '../../modal/conteiner/Styles';
import { FundoModal } from '../../modal/imagem/Styles';
import { ConteinerModal, DivFormulario, DivImagem, ButtonConteiner, DivButton } from './styles';
import React from 'react'
const ModalLocalizacao = ({ onClose = () =>{},children})=>{
    return (
        <FundoModal>
            <ConteinerModal>
                <DivFormulario>
                    <h2>Localização</h2>
                    <ButtonConteiner>Detectar localização atual</ButtonConteiner>
                    <TextLabel>Escolher outra localização:</TextLabel>
                    <input type="text" placeholder="Search for location..." ></input>
                    <DivImagem>
                        <img src="/images/Mapa.jpg" ></img>
                    </DivImagem>
                    <ButtonConteiner variante="color">Resetar localização</ButtonConteiner>
                </DivFormulario>
                <DivButton>
                    <Button color="Claro"onClick={onClose}> Cancelar</Button>
                    <Button>Salvar</Button>
                </DivButton>
            </ConteinerModal>
        </FundoModal>
    )
}
export default ModalLocalizacao;