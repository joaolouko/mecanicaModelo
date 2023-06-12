import { useState } from 'react'


function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function LimparEmail() {
        setUserEmail('')
    }


    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar-emal</button>
            </form>
            {userEmail && (
                <div>
                    <p>o e-mail do usuario é: {userEmail}</p>
                    <button onClick={LimparEmail}>Limpar e-mail</button>
                </div>

            )}

        </div>

    )
}

export default Condicional