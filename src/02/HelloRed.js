import styles from "./HelloRed.module.css"
import { GiSpookyHouse } from "react-icons/gi";

export default function HelloRed() {
  return (
    <div>
      <h1 className={styles.ch1}>
        <GiSpookyHouse /> 안녕하세요? <GiSpookyHouse />
      </h1>
    </div>
  )
}
