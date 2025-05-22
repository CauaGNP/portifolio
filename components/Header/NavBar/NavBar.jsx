"use client"

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathName = usePathname();

    return <nav className={styles.navBar}>
        <Link href="/" className={styles.link}> 
        <div className={pathName === "/" ? styles.checked : null}/>
        <Image src="/icons/home.svg" width={25} height={25} alt="Home icon"/> Home
        </Link>
        
        <Link href="/about" className={styles.link}>
        <div className={pathName === "/about" ? styles.checked : null}/>
        <Image src="/icons/about.svg" width={25} height={25} alt="About icon"/> Sobre
        </Link>

        <Link href="#" className={styles.link}>
        <div className={pathName === "/experence" ? styles.checked : null}/>
        <Image src="/icons/luggage.svg" width={25} height={25} alt="Experence icon"/> Experiências
        </Link>

        <Link href="#" className={styles.link}>
        <div className={pathName === "/projects" ? styles.checked : null}/>
        <Image src="/icons/projects.svg" width={25} height={25} alt="Proects icon"/> Projetos
        </Link>

        <Link href="#" className={styles.link}>
        <div className={pathName === "/repository" ? styles.checked : null}/>
        <Image src="/icons/github.svg" width={25} height={25} alt="GitHub icon"/> Repositório
        </Link>

        <Link href="#" className={styles.link}>
        <div className={pathName === "/game" ? styles.checked : null}/>
        <Image src="/icons/game-controller.svg" width={25} height={25} alt="Control icon"/> Jogo
        </Link>
    </nav>
}