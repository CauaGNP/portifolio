import styles from "./stacks.module.css";

export default function Stacks({stack, children}){
    return(
        <div className={styles.stackContain}>
            {children}
            <h1>{stack}</h1>
        </div>
    )
}