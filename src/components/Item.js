import styles from './Item.module.css'

function Item() {
    return(
        <div className={styles.item}>
            <h1>Item x</h1>
            <p>valor de compra:</p>
            <p>Média de venda:</p>
        </div>
    )
}

export default Item