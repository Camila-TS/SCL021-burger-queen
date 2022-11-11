import React from 'react'
// import {
//   Link
// } from "react-router-dom";

import Logo from '../components/Logo';
import styles from './orders.module.css';

function Orders() {

  return (
    <div className={styles.orders}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo}/> 
        <Logo className={styles.logo}/>
        </div>
      <h1>Tomar Pedido</h1>
      <div className={styles.menuWrapper}>
        <div className={styles.buttonWrapper}>
          <button className={styles.menuButton}>Desayuno</button>
          <button className={styles.menuButton}>Día</button>
        </div>
        <div className={styles.order}>
          <input type="text" placeholder='Cliente'/><br />
          <div className={styles.eachOrder}>
            <label >Total</label><br />
            <label >Observación</label>
            <input type="text" /><br />
          </div>
          <button id={styles.sendButton}>Enviar</button>
        </div>
      </div>
      <button className={styles.kitchenButton}>Cocina</button>

    </div>
  )
}

export default Orders;