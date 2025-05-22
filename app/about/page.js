import styles from "./page.module.css";
import Image from "next/image";

import Header from "@/components/Header/Header"

export default function About(){
    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h1>Um breve resumo</h1>  
                        <p>Olá! Me chamo Cauã Gabriel, tenho 2 anos de experiência em programação e atualmente curso o 3° período de Sistemas para Internet na UNICAP. Tenho foco em desenvolvimento front-end, mas também estou expandindo meus conhecimentos em tecnologias back-end.</p>
                    </div>
                    <Image src="/assets/astronaut.png" width={150} height={180} alt="astronaut Image"/>
                </section>
                
                <section className={styles.stacksSection}>
                    <h1>01-Front-end Software Skills</h1>
                    <div className={styles.divStacks}>

                    </div>
                </section>
            </main>
        </div>
    )
}