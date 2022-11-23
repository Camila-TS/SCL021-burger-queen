import React from 'react'
import styles from '../views/kitchen.module.css';

const Preparations = ({ item }) => {

  const [serve, setServe] = React.useState(true)

  const itsReady = () => {
    setServe(false)
  }
  const notReady = () => {
    setServe(true)
  }

  //console.log(typeof(new Date().toLocaleString()))
  let theDate = new Date().toLocaleString()
  let partOfDate = theDate.slice(-8)
  // console.log(partOfDate)
  // console.log(theDate.substr(-8))

  return (
    <div className={styles.preparationItem}>
      <span id={styles.clientName}>{item.client}</span><hr />
      <span id={styles.date}>{item.date}</span><hr />
      <div className={styles.food}>
        <span id={styles.content}>
          {item.content.map((element, index) => (
            <span key={index}>
              {element} <br />
            </span>
          )
          )}
        </span><br />
        <label id={styles.obsLabel}>Observación:</label>
        <span id={styles.obsContent}>{item.observation}</span><br />
      </div>
      <div className={styles.buttonsWrapper}>
        <img id={styles.peso} src="https://i.ibb.co/31fcvVC/peso.png" alt="Pedir cuenta" />
        {serve ? (
          <button className={styles.pending} onClick={itsReady}>Pendiente</button>
        ) : (
          <button className={styles.ready} onClick={notReady}>Listo {partOfDate} hrs</button>
        )}
        <img id={styles.edit} src="https://i.ibb.co/0rSxBJQ/editar.png" alt="Editar" />
      </div>
      {/* <div>
        {serve ? (
          <span></span>
        ) : (
          <span id={styles.servedDate}>{`${partOfDate} hrs`}</span>
        )}
      </div> */}
    </div>
  )
}

export default Preparations