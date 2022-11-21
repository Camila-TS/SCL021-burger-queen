import React from 'react'

const Selections = ({ item, className, styles, pedido, setPedido }) => {

  //función para pasar a img onClick y elimine el item correspondiente(index) de setPedido
  //traer pedido y setPedido en props
  const deleteItem = () => {
    const pedidoFiltered = pedido.filter(element => element.id !== item.id)
    setPedido(pedidoFiltered)
    //console.log(item)
  }

  //console.log(pedido)

  return (
    <div
      className={className}>
      <span className={styles.nameSelection}>{item.name}</span>
      <span className={styles.priceSelection}>{`S${item.price}`}</span>
      <img onClick={deleteItem} className={styles.delete} alt='Eliminar' src="https://i.ibb.co/bdM5MsM/eliminar3.png" />
    </div>
  )
}

export default Selections