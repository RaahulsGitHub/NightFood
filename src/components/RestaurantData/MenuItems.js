import React from 'react'

function MenuItems({items}) {
    if(!items) return null
    console.log(items)
  return (
    <div className='flex flex-col border-t border-b'>
        <h1>{items?.card?.info?.name}</h1>
    </div>
  )
}

export default MenuItems