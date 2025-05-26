"use client"

import styles from "./header.module.css";

import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import { Menu } from "lucide-react";

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
                    <Menu size={30}/>
                    Cauã Gabriel
                </button>
            </div>
            <NavBar />
        </header>
    )
}