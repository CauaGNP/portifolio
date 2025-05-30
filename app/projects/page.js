import styles from "./page.module.css";

import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header"
import ProjectContain from "@/components/ProjectContain/ProjectContain";
import Project from "@/components/Project/Project";
import getAPI from "@/services/gitHubAPI/gitAPI";

export default async function Projects(){

    const githubRepos = await getAPI();  

    const styleIcon = {
        marginTop : "5px",
    }
    

    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Projetos</h1>
                    <ProjectContain>
                        <Project title="Y">
                            <a href="https://github.com/CarlosfcPinheiro/Y" target="_blank">
                                <img src="/assets/y.png" width={550} height={380} alt="Y project" className={styles.projectImage}/>
                            </a>
                            <p>O Y foi um projeto fulStack que juntamente com um grupo de amigos para finalizar o 2° período do curso Sistemas para internet. Foi utilizado HTML5, CSS3 e javascript para fazer o front-end e xxx para o back-end.</p>
                        </Project>
                    </ProjectContain>
                    <ProjectContain>
                        <Project title="GitFind">
                            <a href="https://github.com/CauaGNP/GitFind" target="_blank">
                                <img src="/assets/gitfind.png" width={550} height={380} alt="GitFind project" className={styles.projectImage}/>
                            </a>
                            <p>O GitFind foi um projeto feito com a biblioteca React com integração da API do github para um curso da DIO. Esse projeto tem como objetivo procurar perfils do github e mostrar os seus respectivos repositórios.</p>
                        </Project>
                    </ProjectContain>
                    
                    <section className={styles.sectionProjects}>
                    <h2 className={styles.title}>Repositório</h2>
                    <p className={styles.paragraph}>Aqui você poderá ver meus repositórios do meu GitHub e acessa-los.</p>
                    {githubRepos.map((repos, repoKey)=>(
                        <div key={repoKey} className={styles.divRepos}>
                            <h1>{repos.name}</h1>
                            <a href={repos.html_url} target="_blank" className={styles.link}>
                                <ArrowRight size={28} color="black"/>
                            </a>
                        </div>
                    ))} 
                    </section>
                </section>
            </main>
        </div>
    )
}