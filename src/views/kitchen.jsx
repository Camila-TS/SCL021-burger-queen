import React, { useState, useEffect } from 'react'
import {
  Link
} from "react-router-dom";
import { allOrders } from '../firebase'
import styles from './kitchen.module.css';
import Logo from '../components/Logo';
import Preparations from '../components/Preparations';


function Kitchen() {

  const [list, setList] = useState([])

  const myOrders = async () => {
    let ordersObtain = await allOrders()
    setList([...ordersObtain])
    //console.log(ordersObtain[0].date)
  }
  
  // const ordersByDate = () => {
  //   for (let i = 0; i < item.length; i++) {
  //     item[i].date.sort((a,b) => a-b)
  //   }
  // }
  // console.log(item.date)

  //const orderByDate = item.date.sort((a,b) => a-b)
  //console.log(orderByDate)


  useEffect(() => {
    myOrders();
  }, []);

  return (
    <div className={styles.kitchen}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
        <Logo className={styles.logo} />
      </div>
      <h1>Cocina</h1>
      <div className={styles.ordersWrapper}>
        {list.map((item) => (
          <Preparations
            key={item.id}
            className={styles.preparations}
            styles={styles}
            item={item}
          />
        )
        )}
      </div>
      <button className={styles.takeOrder}><Link className={styles.link} to="/">Tomar Pedido</Link></button>
    </div>
  )
}

export default Kitchen;