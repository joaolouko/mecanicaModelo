import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('usuario', name, 'foi cadastrado com a senha:', password)
    }


    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" >Nome:</label>
                    <input type="text" id="name" name="name" placeholder="digite o seu nome" onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                <label htmlFor="password" >Senha:</label>
                    <input type="password" id="password" name="password" placeholder="digite a sua senha" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form