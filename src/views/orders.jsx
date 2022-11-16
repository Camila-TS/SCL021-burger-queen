import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo from '../components/Logo';
import styles from './orders.module.css';
import Menu from '../menu.json'
import Item from '../components/Item';
import Selections from '../components/Selection';

function Orders() {

  const [menuOption, setMenuOption] = React.useState(true);
  const [pedido, setPedido] = React.useState([]);
  
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

const addProduct = (item) => {

  setPedido([
    ...pedido,
    item
  ]);
}
//  console.log(pedido)
 // console.log(pedido[0].price)

let allPrices = [];
for (let i = 0; i < pedido.length; i++) {
  for (let key in pedido[i]) {
    if (pedido[i].hasOwnProperty(key) && key === "price") {
      allPrices.push(pedido[i][key]);
    }
  }
}
//console.log(allPrices)

const totalPrice = allPrices.length >= 1 ?  allPrices.reduce((a,b) => a+b) : 0
//console.log(totalPrice)

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
          {choice.map((items, index) => 
             (
              <Item 
              key={index} 
              items={items} 
              className={styles.item}
              onClick={addProduct}
              />
             )
            )}
        </div>
        </div>
        <div className={styles.order}>
          <input type="text" placeholder='Cliente'/><br />
          <div className={styles.eachOrder}>
            <div className={styles.itemsSelection}>
              {pedido.map((item, index) => 
               (
                <Selections 
                key={index}
                item={item}
                className={styles.itemsContainer}
                styles={styles}
                pedido={pedido}
                setPedido={setPedido}
                />
                // <div 
                // key={index}
                // className={styles.itemsContainer}>
                //   <span className={styles.nameSelection}>{item.name}</span> 
                //   <span className={styles.priceSelection}>{`S${item.price}`}</span>
                //   <img id={styles.delete} alt='Eliminar' src="https://i.ibb.co/bdM5MsM/eliminar3.png"/>
                // </div>
               )
              )}
            </div>
            <div className={styles.totalContainer}>
              <label id={styles.totalLabel}>Total</label>
              <p id={styles.total}>{`$${totalPrice}`}</p><br />
            </div>
            <label>Observación</label>
            <input type="text" /><br />
          </div>
          <button id={styles.sendButton}>Enviar</button>
        </div>
      </div>
      <button className={styles.kitchenButton}><Link to="/kitchen" className={styles.link}>Cocina</Link></button>

    </div>
  )
}

export default Orders;