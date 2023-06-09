import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>
                frase muito foda de componente 
            </p>
        </div>
    )
}

export default Frase