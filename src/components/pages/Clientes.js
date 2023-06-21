
import styles from './Clientes.module.css'

import Cards from '../Cards'


function Clientes(){
    return(
        <div>
            <h1 className={styles.titulo}>Pagina para cadastro e monitoramento de clientes</h1>
            
            <Cards/>
            
        </div>
    )
}

export default Clientes