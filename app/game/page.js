"use client"

import {
     useState } from "react";
import styles from "./page.module.css";

import Header from "@/components/Header/Header";

export default function Game(){
    
    const [inputValue, setInputValue] = useState();
    const [chances, setChaces] = useState(0);
    const [password, setPassword] = useState([]);
    const [userPassword, setUserPassword] = useState([]);
    const [point, setPoint] = useState(0)
    const [gameStarted, setGameStarted] = useState(true);

    function numbersGenerate(array){
        const copyPassword = [...array];

        while(copyPassword.length < 5){
            const randomNumber = Math.floor(Math.random() * 10).toString();
            if (!copyPassword.includes(randomNumber)) {
                copyPassword.push(randomNumber);
            } 
        }

        console.log(copyPassword)

        setPassword(copyPassword);
        setGameStarted(false);
        setUserPassword([]);
        setChaces(0);
        setPoint(0);
    }

    function displayNumber(){
        alert(`A senha é ${password}`);
        setGameStarted(true);
        setPassword([]);
        setUserPassword([]);
        setChaces(0);
        setPoint(0);
    }

    function sendPassword(numbersInputValue){   
        setUserPassword([...userPassword, numbersInputValue.toString().split("")]);
        displayPoints(numbersInputValue.toString().split(""))
    }

    function compareNumbers(value, index){
        if(value === password[index]){
            return styles.correctPosition;
        }
        if(password.some(caracter => value == caracter)){
            return styles.incorretPosition;
        }
        return styles.extingueDaFaceDaTerra;
    }

    function displayPoints(value){
        let points = 0;

        value.forEach((digit, index) => {
        if(digit === password[index]){
            points++;
        }
    });
        console.log(points)
        setPoint(points)
    }

    return(
        <div className={styles.divContain}>
            <Header />
            <main className={styles.main}>
                <section className={styles.section}>

                    {point === 5 ? <h1>Você Ganhou</h1> : chances === 10 ? <h1>Voce perdeu</h1> : null}
                    
                    {userPassword.map((passwordDisplay,i) => (
                        <div key={`${i}Password`} className={styles.divPassword}>

                            {passwordDisplay.map((digit, index) => (
                                <p key={`${index}IndexValue`}
                                className={compareNumbers(digit, index)}
                                >{digit}</p>
                            ))}

                        </div> 
                    )) }

                    <section className={styles.sectionInput}>
                        <input type="number" min="0" max="9"  onChange={(e) =>{setInputValue(e.target.value)}} className={styles.input}/>
                        
                        <div className={styles.buttons}>
                            <button 
                            onClick={() => {inputValue.length === 5 ? sendPassword(inputValue) : alert("Você deve inserir 5 números para gerar uma tentativa!!")
                            setChaces(chances + 1);
                            }}
                            disabled={gameStarted || chances === 10 || point === 5}
                            >Enviar senha</button>

                            <button 
                            onClick={() => {
                            numbersGenerate(password) 
                            setGameStarted(false)}}
                            >Gerar Senha</button>

                            <button 
                            onClick={() => {displayNumber()}} 
                            disabled={gameStarted}
                            >Mostrar Senha</button>
                        </div>
                    </section>


                
                </section>
            </main>
        </div>
    )
}