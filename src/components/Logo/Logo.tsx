import { TimerIcon } from "lucide-react";
import styles from './Logo.module.css'
import RouterLink from "../RouterLink/RouterLink";

export default function Logo(){
    return(
        <div className={styles.logo}>
            <RouterLink href="/" className={styles.logo__link}>
                <TimerIcon />
                <span>PomoClock</span>
            </RouterLink>
        </div>
    )
}