import React, { useState } from 'react';
import {Conteudo, PrimeiraColuna ,SencondColum, DivParagraph, DivTabela} from './styles';
import Comment from '../Comment/Comment';
import Images from '../Images/Images';
import Formulario from './formulario'

function Description(props) {
    return (
        <>
            {props.company.map(company => (
                <Conteudo>
                    <PrimeiraColuna spacing="2rem">
                        <Images url={company.image.url} />
                        <Comment />
                    </PrimeiraColuna>

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
                            <DivTabela key={schedules.id}>
                                <p> {(schedules.day)}</p>
                                <p> {(schedules.start)}-{(schedules.end)}</p>
                            </DivTabela>
                        ))}

                        <DivParagraph>
                            <h3>Endereço</h3>
                            <p>{company?.address?.street},{company?.address?.number}{company?.address?.district}{company?.address?.country}</p>
                            <img src="https://blacknb.s3.eu-west-3.amazonaws.com/blob_3f1bab4768" alt="Tunnel d'Antony, 92160 Antony, France" class="MapsStaticDisplay__StyledImg-fmcgrs-0 bdLITT" />
                        </DivParagraph>
                        <DivParagraph>
                            <h3>Perguntas e respostas</h3>
                            <Formulario questions={company.questions} modifiedData ={props.modifiedData} setRecord ={props.setRecord} changesRecord={props.changesRecord}/>
                        </DivParagraph>
                    </SencondColum>
                </Conteudo>
            ))}
        </>
    );

}
export default Description;