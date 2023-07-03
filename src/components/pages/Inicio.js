import Acoes from '../Acoes'
import styles from './Inicio.module.css'
import Noticias from '../Conexoes'

function Inicio() {
    return (
        <div>
            <div className={styles.container_titulo}>
                <h1 className={styles.titulo}>Bem vindo Cristiano</h1>
                <h2 className={styles.texto}>Aqui estão as suas ultimas ações</h2>
            </div>

            <div className={styles.container}>
                <Acoes />
                <Noticias/>
            </div>

        </div>
    )
}

export default Inicio