import styled from 'styled-components';
export const FormularioDiv = styled.div`
    >form div.form {
        display: flex;
    }
    >form div.form input {
        border: 0.5px solid rgb(59, 46, 29);
        border-radius: 5px;
        font-family: Montserrat;
        box-sizing: border-box;
        width: 100%;
        padding: 0.75rem;
        margin: 0px 1rem 0px 0px;
    }
    >form div.form button {
        padding: 0.75rem 1.75rem;
        border-radius: 5px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        background-color: rgb(59, 46, 29);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
    >form div.Exemplo p {
        margin-top: 1rem;
    }

`;

export default function Formulario(props) {
    return (
        <FormularioDiv>
            <form onSubmit={props.changesRecord}>
                <div class="form" >
                    <input id='input' type="text" name="description" value={props.modifiedData.name} onChange={props.setRecord} placeholder="Escrever uma pergunta..." />
                    <button type="submit">Enviar</button>
                </div>
                <div class="questions">
                    {props.questions.map(questions => (
                        <p key={questions.id}>
                            <strong>P: </strong>
                            {(questions.description)}
                        </p>
                    ))}
                </div>
            </form>
        </FormularioDiv>
    );
}
 