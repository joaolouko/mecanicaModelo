import Item from "./Item"

function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisa boas:</h3>
            {itens.length > 0 ? (


                itens.map((item, Index) => (
                    <p key={Index}>{item}</p>
                ))
            ) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}

export default OutraLista