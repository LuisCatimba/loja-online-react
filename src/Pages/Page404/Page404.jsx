import styles from "./Page404.module.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={styles.conteinerPage404}>
      <h1>404</h1>
      <span>Página não encontrada.</span>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Page404;
