import styles from "./projectContain.module.css";

export default function ProjectContain({children}){
    return(
        <div className={styles.contain}>
            {children}
        </div>
    )
}