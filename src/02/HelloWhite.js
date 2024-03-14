import styles from "./HelloWhite.module.css"
import { GiSpookyHouse } from "react-icons/gi";


export default function HelloWhite() {
    return (
        <div>
            <h1 className={styles.ch1}>
                <GiSpookyHouse /><GiSpookyHouse /><GiSpookyHouse /><GiSpookyHouse />
            </h1>
        </div>
    )
}
