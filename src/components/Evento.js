function Evento({numero}) {
    
    function meuEvento(){
        console.log('opa, fui ativado! ', numero)
    }
    
    return(
        <div>
            <p>Clique para disparar um evneto:</p>
            <button onClick={meuEvento}>ativar</button>
        </div>
    )
}

export default Evento