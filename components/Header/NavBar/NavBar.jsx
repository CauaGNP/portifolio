"use client"

import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BackpackIcon, Code2, Gamepad2, HomeIcon, InfoIcon } from "lucide-react";

export default function NavBar(){
    const pathName = usePathname();

    return <nav className={styles.navBar}>
        <Link href="/" className={styles.link}> 
        <div className={pathName === "/" ? styles.checked : styles.noChecked}/>
        <HomeIcon size={25}/> Home
        </Link>
        
        <Link href="/about" className={styles.link}>
        <div className={pathName === "/about" ? styles.checked : styles.noChecked}/>
        <InfoIcon/>Sobre
        </Link>

        <Link href="/experience" className={styles.link}>
        <div className={pathName === "/experience" ? styles.checked : styles.noChecked}/>
        <BackpackIcon size={28}  strokeWidth={1.5}/> Experiência
        </Link>

        <Link href="/projects" className={styles.link}>
        <div className={pathName === "/projects" ? styles.checked : styles.noChecked}/>
        <Code2  size={25}/> Projetos
        </Link>

        <Link href="/game" className={styles.link}>
        <div className={pathName === "/game" ? styles.checked : styles.noChecked}/>
        <Gamepad2 size={28}/> Jogo
        </Link>
    </nav>
}