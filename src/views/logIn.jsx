import React from 'react'
import {
    Link
  } from "react-router-dom";

  import Logo from '../components/Logo';
  import styles from './logIn.module.css'

function LogIn() {

  return (
    <div className={styles.login}>
        <h1>Burger <Logo className={styles.logo}/> Paradise</h1>
        <button><Link className={styles.link} to="/">Mesero</Link></button><br />
        <button><Link className={styles.link} to="/kitchen">Cocina</Link></button>
    </div>
  )
}

export default LogIn;