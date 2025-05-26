"use client"

import { use, useState } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header/Header";

export default function Game(){
    
    const [inputValue, setInputValue] = useState();
    const [chances, setChaces] = useState(0);
    const [checkNumbers, setCheckNumbers] = useState()
    const [password, setPassword] = useState([]);
    const [userPassword, setUserPassword] = useState([]);

    function numbersGenerate(){    
        const copyPassWord = [...password]
        for(let i = 0; i < 5; i++){
            const randomNumber = Math.floor(Math.random() * 10 );

            copyPassWord[i] = randomNumber.toString();
        }
        setPassword(copyPassWord);
    }

    function displayNumber(){
        alert(password);
        alert("UserValue" + userPassword)
        console.log(userPassword)
    }

    function sendPassword(numbersInputValue){   
        const copyUserPassword = [...userPassword];
        copyUserPassword.push(numbersInputValue.toString().split(""));

        setUserPassword(copyUserPassword);
    }

    // function compareNumbers(value){
    //     password.map((aaa) => {
    //         if(value === aaa){
    //             return (
    //                 <p className={styles.correto}>{value}</p>
    //             )
    //         }else if(password.some((digit) => digit === value)){
    //             return (
    //                 <p className={styles.lugarIncorreto}>{value}</p>
    //             )
    //         }else{
    //             return (
    //                 <p className={styles.correto}>{value}</p>
    //             )
    //         }
    //     })
    // }

    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>
                    {userPassword.map((passwordDisplay,i) => (
                        <div key={`${i}Password`} >
                            {passwordDisplay.map((digit, index) => (
                                <p key={`${index}IndexValue`}>{digit}</p>
                            ))}
                        </div> 
                    )) }
                    
                    <input type="number" min="0" max="9"  onChange={(e) =>{setInputValue(e.target.value)}}/>
                    
                    <button onClick={() => inputValue.length === 5 ? sendPassword(inputValue) : alert("Você deve inserir 5 números para gerar uma tentativa!!")}>Enviar senha</button>
                    <button onClick={() => numbersGenerate()}>Gerar Senha</button>
                    <button onClick={() => displayNumber()}>Mostrar Senha</button>
                </section>
            </main>
        </div>
    )
}