import React from 'react'

const Item = ({items, index, className, onClick}) => {

  return (
    <h4 onClick={onClick} key={index} className={className}>{`${items.item} $${items.price}`}</h4>
  )
}

export default Item