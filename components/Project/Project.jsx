import styles from "./project.module.css";

export default function Project({title, children}){
    return(
        <div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}