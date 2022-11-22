import React from 'react'
import styles from '../views/kitchen.module.css';

const Preparations = ({item}) => {

    const eachContent = item.content.map((element) => element + " ")

  return (
    <div className={styles.preparationItem}>
        <span>{item.client}</span><hr />
        <span>{item.date}</span><hr />
        <span>{eachContent}</span><br />
        <label>Observación:</label>
        <span>{item.observation}</span><br />
        <div /*className={styles.buttonsWrapper}*/>
            <img src="" alt="Pedir cuenta" />
            <button>Pendiente</button>
            <img src="" alt="Editar" />
        </div>
    </div>
  )
}

export default Preparations