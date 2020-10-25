import Header from '../header';
import Menu from '../menu';
import Rodape from '../footer';
import styled from 'styled-components';
import Description from '../discription/Description';

export const MainContainer = styled.div`
    padding: 3rem 2rem 0.50rem;
    max-width: 1440px;
    margin: 0px 2%;
    spacing: "1rem";
`;

export default function ContainerPage(props) {
    return(
        <>
            <Header/>
            <MainContainer>
                <Menu/>
                <Description 
                    company={props.company} 
                    modifiedData ={props.modifiedData} 
                    setRecord ={props.setRecord} 
                    changesRecord={props.changesRecord} 
                /> 
            </MainContainer>
            <Rodape></Rodape>
        </>
    );          
}
