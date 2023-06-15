import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Inicio</Link></li>
        <li className={styles.item}><Link to="/estoque">Estoque</Link></li>
        <li className={styles.item}><Link to="/clientes">Clientes</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
