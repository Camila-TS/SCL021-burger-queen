import React from 'react'
import styles from '../views/kitchen.module.css';

const Preparations = ({item}) => {

//tengo arreglo
//quiero devolver cada item por separado

    console.log(item.content)
    const eachContent = item.content
    console.log(eachContent)
    // const eachArr = () => {
    //     for (let i = 0; i < eachContent.length; i++) {
    //        return eachContent[i] + <br />
    //     }
    // }
    // console.log(eachArr)
    
        // const eachContent = item.content.forEach((element) => (
        // <div key={item.id}>
        // <span>{element}</span> <br />
        // </div>
        // )
        // )
        // console.log(eachContent) 

  return (
    <div className={styles.preparationItem}>
        <span id={styles.clientName}>{item.client}</span><hr />
        <span id={styles.date}>{item.date}</span><hr />
        <span id={styles.content}>{item.content}</span><br />
        <label id={styles.obsLabel}>Observación:</label>
        <span id={styles.obsContent}>{item.observation}</span><br />
        <div className={styles.buttonsWrapper}>
            <img id={styles.peso} src="https://i.ibb.co/31fcvVC/peso.png" alt="Pedir cuenta" />
            <button>Pendiente</button>
            <img id={styles.edit} src="https://i.ibb.co/0rSxBJQ/editar.png" alt="Editar" />
        </div>
    </div>
  )
}

export default Preparations