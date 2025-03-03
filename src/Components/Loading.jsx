//Css

import styles from "./Loading.module.css";

//Icone
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return <AiOutlineLoading3Quarters className={styles.loading} />;
};

export default Loading;
