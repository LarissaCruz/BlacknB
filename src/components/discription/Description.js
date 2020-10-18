import React, { useState } from 'react';
import {Content, FirstColumn ,SencondColum, DivParagraph, DivSchedules} from './styles';
import Comment from '../Comment/Comment';
import Images from '../Images/Images';
import Form from './formulario'

function Description(props) {
    return (
        <>
            {props.company.map(company => (
                <Content>
                    <FirstColumn spacing="2rem">
                        <Images url={company.image.url} />
                        <Comment />
                    </FirstColumn>

                    <SencondColum key={company.id} >
                        <h3>Sobre:</h3>
                        <DivParagraph>
                            <p>{company.description} </p>
                        </DivParagraph>

                        <DivParagraph>
                            <h3 >Telefone:</h3>
                            <p></p>
                        </DivParagraph>

                        <DivParagraph>
                            <h3 >Site:</h3>
                            <p><a href={company.Site}>{company.Site}</a></p>
                        </DivParagraph>

                        <h3>Horário de Abertura:</h3>
                        {company.schedules.map(schedules => (
                            <DivSchedules key={schedules.id}>
                                <p> {(schedules.day)}</p>
                                <p> {(schedules.start)}-{(schedules.end)}</p>
                            </DivSchedules>
                        ))}
                        <DivParagraph>
                            <h3>Endereço</h3>
                            <p>{company?.address?.street},{company?.address?.number}{company?.address?.district}{company?.address?.country}</p>
                            <img src="https://blacknb.s3.eu-west-3.amazonaws.com/blob_3f1bab4768" alt="Tunnel d'Antony, 92160 Antony, France" class="MapsStaticDisplay__StyledImg-fmcgrs-0 bdLITT" />
                        </DivParagraph>
                        <DivParagraph>
                            <h3>Perguntas e respostas</h3>
                            <Form questions={company.questions} modifiedData ={props.modifiedData} setRecord ={props.setRecord} changesRecord={props.changesRecord}/>
                        </DivParagraph>
                    </SencondColum>
                </Content>
            ))}
        </>
    );

}
export default Description;