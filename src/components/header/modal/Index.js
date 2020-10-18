import { TextLabel, Button } from '../../modal/conteiner/Styles';
import { BottomModal } from '../../modal/imagem/Styles';
import { ConteinerModal, DivForm, DivImage, ButtonConteiner, DivButton } from './styles';
import React from 'react'
const ModalLocalizacao = ({ onClose = () =>{},children})=>{
    return (
        <BottomModal>
            <ConteinerModal>
                <DivForm>
                    <h2>Localização</h2>
                    <ButtonConteiner>Detectar localização atual</ButtonConteiner>
                    <TextLabel>Escolher outra localização:</TextLabel>
                    <input type="text" placeholder="Search for location..." ></input>
                    <DivImage>
                        <img src="/images/Mapa.jpg" ></img>
                    </DivImage>
                    <ButtonConteiner variante="color">Resetar localização</ButtonConteiner>
                </DivForm>
                <DivButton>
                    <Button color="Claro"onClick={onClose}> Cancelar</Button>
                    <Button>Salvar</Button>
                </DivButton>
            </ConteinerModal>
        </BottomModal>
    )
}
export default ModalLocalizacao;