import React from 'react'

const Item = ({items, index, className}) => {

  return (
    <h4 key={index} className={className}>{`${items.item} $${items.price}`}</h4>
  )
}

export default Item