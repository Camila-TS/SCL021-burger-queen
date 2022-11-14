import React from 'react'
// import {
//   Link
// } from "react-router-dom";

import Logo from '../components/Logo';
import styles from './orders.module.css';
import Menu from '../menu.json'
import Item from '../components/Item';

function Orders() {

  const [menuOption, setMenuOption] = React.useState(true);
  
    const setBreakfast = () => {
        setMenuOption(true)
    }
    const setDay = () => {
        setMenuOption(false)
    }

const breakfast = Menu.breakfast;
const day = Menu.day;

// console.log(breakfast)
// console.log(day)

const choice = menuOption ? breakfast : day

  return (
    <div className={styles.orders}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo}/> 
        <Logo className={styles.logo}/>
        </div>
      <h1>Tomar Pedido</h1>
      <div className={styles.menuWrapper}>
        <div className={styles.buttonWrapper}>
          <button onClick={setBreakfast} className={styles.menuButton}>Desayuno</button>
          <button  onClick={setDay} className={styles.menuButton}>Día</button>
          <div className={styles.items}>
          {choice.map((items, index) => {
            return (
              <Item 
              key={index} 
              items={items} 
              className={styles.item}/>
              );
            })}
        </div>
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