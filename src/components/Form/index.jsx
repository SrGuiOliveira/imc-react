import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(null);
    const [message, setMessage] = useState(null);

    const calculateImc = () => {
        if (height < 50 || weight <= 0) {  
            setImc(null);
            setMessage(
                <div> 
                    <b>Valor inválido! Insira dados válidos para peso e altura.</b> 
                </div>
            );
            return;
        }
        
        const imcValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
        setImc(imcValue);

        if (imcValue < 18.5) {
            setMessage(
                <div>
                    <b>Você está abaixo do peso</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        } else if (imcValue >= 18.5 && imcValue < 25) {
            setMessage(
                <div>
                    <b>Você está no peso normal</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        } else if (imcValue >= 25 && imcValue < 30) {
            setMessage(
                <div>
                    <b>Você está acima do peso</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        }  else if (imcValue >= 30 && imcValue < 35) {
            setMessage(
                <div>
                    <b>Você está em nível de obesidade classe I</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        } else if (imcValue >= 35 && imcValue < 40) {
            setMessage(
                <div>
                    <b>Você está em nível de obesidade classe II</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        } else if (imcValue >= 40) {
            setMessage(
                <div>
                    <b>Você está em nível de obesidade classe III</b>
                    <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="Tabela IMC"/>
                    <p>É importante consultar um profissional de saúde para uma avaliação adequada.</p>
                </div>
            );
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Calculadora IMC</h1>
            <div className={styles.height}>
                <label>Sua altura (cm): </label>
                <input onChange={e => setHeight(parseInt(e.target.value))} className={styles.input} type="number" />
            </div>
            <div className={styles.weight}>
                <label>Seu peso (kg): </label>
                <input onChange={e => setWeight(parseInt(e.target.value))} className={styles.input} type="number" />
            </div>
            <button onClick={calculateImc} className={styles.button} type='button'>Calcular</button>
            {imc && (
                <div className={styles.result}>
                    <h2>Seu IMC: {imc}</h2>
                    {message}
                </div>
            )}
            {imc === null && message}
        </div>
    );
};

export default Form;



