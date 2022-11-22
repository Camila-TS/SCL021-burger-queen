import React, { useState, useEffect } from 'react'
import { allOrders } from '../firebase'
import styles from './kitchen.module.css';
import Logo from '../components/Logo';
import Preparations from '../components/Preparations';


function Kitchen() {

  const [list, setList] = useState([])

  const myOrders = async () => {
    let ordersObtain = await allOrders()
    setList([...ordersObtain])
    //console.log(ordersObtain)
  }

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
        {/* {list.map((item,index) => (
            <div key={index} className={styles.eachOrder}>
              <span>{item.client}</span>
              <span>{item.date}</span>
              <span>{item.observation}</span>
            </div>
          )
          )} */}
      </div>
    </div>
  )
}

export default Kitchen;