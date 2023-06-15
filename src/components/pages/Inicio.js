import Acoes from '../Acoes'
import styles from './Inicio.module.css'

function Inicio(){
    return(
        <div>
            <h1 className={styles.titulo}>Bem vindo Cristiano</h1>
            <p className={styles.texto}>Aqui estão as suas ultimas ações</p>
            <Acoes/>
        </div>
    )
}

export default Inicio