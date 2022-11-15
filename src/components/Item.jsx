import React from 'react'

const Item = ({items, index, className, onClick}) => {

  const product = {
    name: items.item,
    price: items.price
  }

  return (
    <h4 onClick={() => {onClick(product)}} key={index} className={className}>{`${items.item} $${items.price}`}</h4>
  )
}

export default Item