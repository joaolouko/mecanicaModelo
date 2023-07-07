import Item from "../Item"

import styles from './Estoque.module.css'

function Estoque() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.titulo}>estoque</h1>
            </div>

            <div className={styles.container_card}>
                <Item />
            </div>


        </div>
    )
}

export default Estoque