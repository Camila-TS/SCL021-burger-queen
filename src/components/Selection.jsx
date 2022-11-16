import React from 'react'

const Selections = ({item, index, className, styles, pedido, setPedido}) => {

//función para pasar a img onClick y elimine el item correspondiente(index) de setPedido
//traer pedido y setPedido en props
const deleteItem = (e) => {
    const itemId = e.target.getAttribute("id")
    const thisItemToDelete = pedido.filter(item => item.id !== itemId)
    setPedido(thisItemToDelete)
   // console.log(thisItemToDelete)//no se elimina item
    //console.log(itemId)// null
    //console.log(e.target.index)//undefined
    //console.log(e.target.id)// en blanco
}

  return (
    <div 
                key={index}
                className={className}>
                  <span className={styles.nameSelection}>{item.name}</span> 
                  <span className={styles.priceSelection}>{`S${item.price}`}</span>
                  <img onClick={deleteItem} id={index} className={styles.delete} alt='Eliminar' src="https://i.ibb.co/bdM5MsM/eliminar3.png"/>
                </div>
  )
}

export default Selections