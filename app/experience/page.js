import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import ExperienceContain from "@/components/ExperienceContain/ExperienceContain";

export default function Experience(){
    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Experiência profissional</h1>
                    <ExperienceContain title="MindIndex" paragraph="Fui designado para fazer um projeto para a empresa Pub Produções, nesse projeto foi utilizado com apenas a biblioteca react." urlImage="pub.png" urlProject="https://pubproducoes.vercel.app/" type="column"/>
                </section>

                <section className={styles.section}>
                    <h1 className={styles.title}>Experiência acadêmica</h1>
                    
                    <ExperienceContain title="Greenomie" paragraph="Durante o primeiro período do curso Sistema para Internet(UNICAP), foi proposto um desafio para o meio ambiente. A partir disso surgiu o greenomie um app que incentiva a compra de produtos recicláveis" urlImage="greenomie.png" urlProject="https://www.figma.com/design/aMwPYNqqjK4J9phEjxDeSI/Greenomie?node-id=103-54&t=HYwpTGzhICj8djD3-1" type="row"/>

                    <ExperienceContain title="InclusiveAID" paragraph="No segundo período fui chamado para participar de um hackation que busca métodos inclusivos através da tecnologia, surgindo o InclusiveAID um app e site que busca melhorar a experiência do usuário de acordo com a sua deficiência." urlImage="aid.png" urlProject="https://www.figma.com/design/BhxWNHmfqvi7nJGe7rS7F0/AID?node-id=0-1&p=f" type="column"/>
                </section>
            </main>
        </div>
    )
}