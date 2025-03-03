import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Os melhores ténis você encontra aqui na Sprint Shoes.</h3>
      <span>
        <i>Sprint Shoes</i> &copy; 2025
      </span>
    </footer>
  );
};

export default Footer;
