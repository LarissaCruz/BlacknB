import React, { useState } from 'react';
import {Content, FirstColumn ,SencondColum,  DivSchedules} from './styles';
import Comment from '../Comment/Comment';
import Images from '../Images/Images';
import Form from './Formulario';
import DivParagraph from './DivParagraph';
export default function Description(props) {
    return (
        <>
            {props.company.map(company => (
                <Content>
                    <FirstColumn spacing="2rem">
                        <Images url={company.image.url} />
                        <Comment />
                    </FirstColumn>

                    <SencondColum key={company.id} >
                        <DivParagraph title='Sobre:' text={company.description}/>
                        <DivParagraph title='Telefone:' text=''/>
                        <DivParagraph title='Site:' text={<a href={company.site}>{company.site}</a>} />

                        <h3>Horário de Abertura:</h3>
                        {company.schedules.map(schedules => (
                            <DivSchedules key={schedules.id}>
                                <p> {(schedules.day)}</p>
                                <p> {(schedules.start)}-{(schedules.end)}</p>
                            </DivSchedules>
                        ))}

                        <DivParagraph 
                            title='Endereço:'
                            text= {`${company?.address?.street},
                                    ${company?.address?.number} 
                                    ${company?.address?.district} 
                                    ${company?.address?.country}`}
                        />

                        <div> 
                            <img src="https://blacknb.s3.eu-west-3.amazonaws.com/blob_3f1bab4768" />
                        </div>
                       
                        <DivParagraph title='Perguntas e respostas'/>
                        <Form 
                            questions={company.questions} 
                            modifiedData ={props.modifiedData} 
                            setRecordZ ={props.setRecord} 
                            changesRecord={props.changesRecord}
                        />
                    </SencondColum>
                </Content>
            ))}
        </>
    );

}
