import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import getAPI from "@/services/gitHubAPI/gitAPI";

export default async function Repository(){

    const r = await getAPI();
    console.log(r[0].name)

    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Repositório</h1>
                </section>
            </main>
        </div>
    )
}