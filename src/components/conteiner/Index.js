import Header from '../header';
import Menu from '../menu';
import Rodape from '../rodape';
import { ConteinerPrincipal} from './styles';
import  Description from '../discription/Description';
function Conteiner2(props) {
    return(
        <>
            <Header/>
            <ConteinerPrincipal>
                <Menu/>
                <Description company={props.record} modifiedData ={props.modifiedData} setRecord ={props.setRecord} changesRecord={props.changesRecord} /> 
            </ConteinerPrincipal>
            <Rodape></Rodape>
        </>
    );
            
}
export default Conteiner2;