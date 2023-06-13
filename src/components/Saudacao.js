function Saudacao({nome}) {

    function gerarSaudacao(algumNome){
        return 'olá', {algumNome}, 'joia'
    }
    return(
        <>
       {nome && <p> {gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao
