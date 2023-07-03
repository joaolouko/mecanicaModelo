import styles from './Conexoes.module.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Noticias() {
    return (
        <div>
            <div className={styles.box}>
                <FaInstagram />
                <p>instagram</p>
                <FaFacebook />
                <p>Facebook</p>
            </div>
        </div>
    )
}

export default Noticias