import { BarMenu, BtnVoltar, BarInfo, Title, DivAvaliacao, IconeAvaliacao, BtnMenu, BtnComponente, IconeNumerico } from './styles'
import StartRating from '../startRating/StartRating'
function Menu() {
    return (
        <BarMenu>
            <BtnVoltar>Voltar</BtnVoltar>
            <BarInfo>
                <Title>
                    <h1>Dysoft</h1>
                </Title>
                <DivAvaliacao>
                    <h3>5.0</h3>
                    <IconeAvaliacao>
                       <StartRating/>
                    </IconeAvaliacao>
                </DivAvaliacao>
            </BarInfo>
            <BtnMenu>
            <BtnComponente variante="color" type="submit">
                    <span>Sobre a Empresa </span>
                </BtnComponente>
                <BtnComponente type="submit">
                    <IconeNumerico>1</IconeNumerico>
                    <span>Colaboradores</span>
                </BtnComponente>

                <BtnComponente type="submit">
                    <IconeNumerico>1</IconeNumerico>
                    <span>Entrevistas</span>
                </BtnComponente>

                <BtnComponente type="submit">
                    <IconeNumerico>1</IconeNumerico>
                    <span>Produtos</span>
                </BtnComponente>

                <BtnComponente type="submit">
                    <IconeNumerico>1</IconeNumerico>
                    <span>Vagas de Emprego</span>
                </BtnComponente>
            </BtnMenu>
        </BarMenu>

    );
}
export default Menu;