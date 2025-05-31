import styles from "./page.module.css";
import Image from "next/image";

import Header from "@/components/Header/Header";
import StacksDiv from "@/components/StacksDiv/StacksDiv";
import Stacks from "@/components/Stacks/Stacks";

export default function About(){
    const FrontImageStyle = {
        position : "relative",
        bottom : "25%",
        left : "5%"
    }

    const BackImageStyle = {
        position : "relative",
        right : "5%"
    }

    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.text}>
                        <h1>Um breve resumo</h1>  
                        <p>Olá! Me chamo Cauã Gabriel, tenho 2 anos de experiência em programação e atualmente curso o 3° período de Sistemas para Internet na UNICAP. Tenho foco em desenvolvimento front-end, mas também estou expandindo meus conhecimentos em tecnologias back-end.</p>
                    </div>
                    <img src="/assets/astronaut.png" width={150} height={180} alt="astronaut Image" className={styles.img}/>
                </section>
                
                <section className={styles.stacksSection}>
                    <h1 className={styles.title}>01-Front-end Software Skills</h1>
                    <div className={styles.divStacks}>
                    <StacksDiv>
                        <Stacks stack="HTML">
                            <Image src="/tec-icons/html.svg" width={80} height={90} alt="HTML Icon"/>
                        </Stacks>
                        <Stacks stack="CSS">
                            <Image src="/tec-icons/css.svg" width={80} height={90} alt="CSS Icon"/>
                        </Stacks>
                        <Stacks stack="JavaScript">
                            <Image src="/tec-icons/javascript.svg" width={80} height={90} alt="JavaScript Icon"/>
                        </Stacks>
                        <Stacks stack="React">
                            <Image src="/tec-icons/react.svg" width={80} height={90} alt="React Icon"/>
                        </Stacks>
                        <Stacks stack="NextJs">
                            <Image src="/tec-icons/nextjs.svg" width={80} height={90} alt="NextJs Icon"/>
                        </Stacks>
                        <Stacks stack="Git">
                            <Image src="/tec-icons/git.svg" width={80} height={90} alt="Git Icon"/>
                        </Stacks>
                    </StacksDiv>

                    <img src="/assets/front-end.png" width={350} height={400} alt="Front-End Image" style={FrontImageStyle} className={styles.imageStacks}/>
                    </div>
            
                    <h1 className={styles.title}>02-Back-end Software Skills</h1>
                    <div className={styles.divStacks}>
                    <img src="/assets/back-end.png" width={350} height={330} alt="Back-End Image" style={BackImageStyle} className={styles.imageStacks}/>

                    <StacksDiv>
                        <Stacks stack="Java">
                            <Image src="/tec-icons/java.svg" width={80} height={90} alt="Java Icon"/>
                        </Stacks>
                        <Stacks stack="SpringBoot">
                            <Image src="/tec-icons/springboot.svg" width={80} height={90} alt="SpringBoot Icon"/>
                        </Stacks>
                        <Stacks stack="Python">
                            <Image src="/tec-icons/python.svg" width={80} height={90} alt="Python Icon"/>
                        </Stacks>
                        <Stacks stack="MySQL">
                            <Image src="/tec-icons/mysql.svg" width={80} height={90} alt="MySQL Icon"/>
                        </Stacks>
                        <Stacks stack="NodeJs">
                            <Image src="/tec-icons/nodejs.svg" width={80} height={90} alt="NodeJs Icon"/>
                        </Stacks>
                    </StacksDiv>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.text}>
                        <h1>Sobre mim</h1>  
                        <p>Sou Cauã Gabriel, apaixonado por tecnologia e inovação. Desde que iniciei meus estudos em programação, venho explorando tanto o front-end quanto o back-end, sempre em busca de novos desafios e aprendizados. Atualmente, curso o 3° período de Sistemas para Internet na UNICAP.Tenho como características a curiosidade, proatividade e gosto por trabalhar em equipe. Além da programação, tenho interesse por design e música. Estou sempre buscando evoluir, seja participando de eventos, cursos ou desenvolvendo projetos próprios.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}