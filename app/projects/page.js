import styles from "./page.module.css";
import Image from "next/image";

import Header from "@/components/Header/Header"
import ProjectContain from "@/components/ProjectContain/ProjectContain";
import Project from "@/components/Project/Project";

export default function Projects(){
    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Projetos</h1>
                    <ProjectContain>
                        <Project title="Y">
                            <a href="https://github.com/CarlosfcPinheiro/Y" target="_blank">
                                <Image src="/assets/y.png" width={550} height={380} alt="Y project"/>
                            </a>
                            <p>O Y foi um projeto fulStack que juntamente com um grupo de amigos para finalizar o 2° período do curso Sistemas para internet. Foi utilizado HTML5, CSS3 e javascript para fazer o front-end e xxx para o back-end.</p>
                        </Project>
                    </ProjectContain>
                    <ProjectContain>
                        <Project title="GitFind">
                            <a href="https://github.com/CauaGNP/GitFind" target="_blank">
                                <Image src="/assets/gitfind.png" width={550} height={380} alt="GitFind project"/>
                            </a>
                            <p>O GitFind foi um projeto feito com a biblioteca React com integração da API do github para um curso da DIO. Esse projeto tem como objetivo procurar perfils do github e mostrar os seus respectivos repositórios.</p>
                        </Project>
                    </ProjectContain>

                </section>
            </main>
        </div>
    )
}