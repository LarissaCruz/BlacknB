
function Formulario(props) {
    return (
        <>
            <form onSubmit={props.changesRecord}>
                <div class="formulario" >
                    <input id='input' type="text" name="description" value={props.modifiedData.name} onChange={props.setRecord} placeholder="Escrever uma pergunta..." />
                    <button type="submit">Enviar</button>
                </div>
                <div class="Exemplo">
                    
                        {props.questions.map(questions => (
                            <p key={questions.id}>
                                <strong>P: </strong>
                                {(questions.description)}
                            </p>
                        ))}
                </div>
            </form>
        </>
    );
}
export default Formulario;