import styles from "./codeDescription.module.css";

export default function CodeDescription({title, description, urlImage}){
    return(<div className={styles.divContain}>
        <h2 className={styles.subTitle}>{title}</h2>
        <p>{description}</p>
        {urlImage ? <img src={`/assets/${urlImage}`} className={styles.image}/> : null}
    </div>)
}