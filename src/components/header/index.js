import { DivHeader, LinkLogo, DivOption, BtnMaps, IconeBtn, Text, BtnLogin} from './styles'
import React, { useState } from 'react';
import ModalMaps from '../header/modal'
function Header() {
    const [ModalLocaliza, SetModalLocaliza] = useState(false);
    return (
        <DivHeader>
            <LinkLogo>
                <img href= "../pages/index.js"src="/images/logo.svg" />
            </LinkLogo>
            <button class= 'BotaoMenu'>    
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M32.8 18H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2zm0 8H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2zM7.2 14h25.6c1.104 0 1.2-.894 1.2-2 0-1.106-.096-2-1.2-2H7.2c-1.104 0-1.2.894-1.2 2 0 1.106.096 2 1.2 2z" fill="#3B2E1D"></path></svg>
            </button>
            
            <DivOption>
                <BtnMaps onClick={() => SetModalLocaliza(true)} >
                    <IconeBtn>
                        <svg width="17" height="25" viewBox="0 0 17 25" fill="none"><path d="M8.127 2.967c2.75 0 4.96 2.24 4.96 5.025 0 2.725-2.21 4.965-4.96 4.965-2.689 0-4.96-2.24-4.96-4.965 0-2.785 2.271-5.025 4.96-5.025zm0 1.09c-2.091 0-3.824 1.755-3.824 3.935 0 2.12 1.733 3.875 3.824 3.875 2.152 0 3.825-1.756 3.825-3.875 0-2.18-1.673-3.935-3.825-3.935z" fill="#BF8514"></path><path d="M8.127 0c4.542 0 8.187 3.693 8.187 8.234 0 3.996-2.151 6.358-4.064 9.445L8.127 24.4l-4.123-6.72C2.092 14.591 0 12.23 0 8.233 0 3.694 3.645 0 8.127 0zm0 1.15c-3.884 0-6.992 3.149-6.992 7.084 0 3.633 2.092 5.994 3.825 8.84l3.167 5.207 3.167-5.207c1.793-2.846 3.884-5.207 3.884-8.84 0-3.935-3.167-7.084-7.05-7.084z" fill="#BF8514"></path></svg>
                    </IconeBtn>
                    <Text>localização:</Text>
                    <Text>Escolher uma localização</Text>
                </BtnMaps>
                {ModalLocaliza ? <ModalMaps onClose={() => SetModalLocaliza(false)} ></ModalMaps> : null}
                <BtnLogin>Login</BtnLogin>
            </DivOption>
        </DivHeader>
    );
}
export default Header;
