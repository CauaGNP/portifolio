"use client"

import styles from "./header.module.css";
import Image from "next/image";

import NavBar from "./NavBar/NavBar";
import { useState } from "react";

export default function Header(){
    const [active, setActive] = useState(true);


    const activeDiv = () => {
        if (active === true){
            setActive(false);
        }else{
            setActive(true)
        }
    }
    
    return(
        <header className={`${styles.header} ${active ? styles.active : null}`}>
            <div className={styles.divButton}>
                <button onClick={activeDiv} className={`${styles.button} ${active ? styles.active : null}`}>
                    <Image src="/icons/menu-bar.svg" width={35} height={35} alt="About icon"/>
                    Cauã Gabriel
                </button>
            </div>
            <NavBar />
        </header>
    )
}