import styles from "./stacksDiv.module.css";

export default function StacksDiv({children}){
    return(
        <div className={styles.stacksDiv}>
            {children}
        </div>
    )
}