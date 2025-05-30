import styles from "./experienceContain.module.css";

export default function ExperienceContain({title, paragraph, urlImage, urlProject, type}){
    return(
        <div className={type === "column" ? styles.divContainC : styles.divContainR }>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.paragraph}>{paragraph}</p>
            </div>
            <div className={styles.linkDiv}>
                <img src={`/assets/${urlImage}`} width="100%" />
                <a href={urlProject} target="_blank"  className={styles.clickAccess}>Clique para acessar</a>
            </div>

        </div>
    )
}