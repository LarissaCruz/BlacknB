import Header from '../header';
import Menu from '../menu';
import Rodape from '../rodape';
import { MainContainer} from './styles';
import  Description from '../discription/Description';
function Conteiner2(props) {
    return(
        <>
            <Header/>
            <MainContainer>
                <Menu/>
                <Description company={props.record} modifiedData ={props.modifiedData} setRecord ={props.setRecord} changesRecord={props.changesRecord} /> 
            </MainContainer>
            <Rodape></Rodape>
        </>
    );
            
}
export default Conteiner2;