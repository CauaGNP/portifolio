import styles from "./page.module.css";
import Link from "next/link";
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
                    <ProjectContain>
                        <Project title="Y">
                            <a href="https://github.com/CarlosfcPinheiro/Y" target="_blank">
                                <Image src="/assets/y.png" width={550} height={300} alt="Y project"/>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt feugiat sem, eget ultricies massa aliquet quis. Nunc tincidunt massa neque, a tincidunt quam bibendum sed. Pellentesque auctor tristique nunc, eget lobortis libero eleifend ut. Integer id diam nisi. Nam quis molestie enim, bibendum.</p>
                        </Project>
                    </ProjectContain>
                </section>
                
            </main>
        </div>
    )
}