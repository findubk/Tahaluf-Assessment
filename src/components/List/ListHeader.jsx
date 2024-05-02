import React from 'react'

function ListHeader({ columns}) {
  return (
    <li className='list-header'>
    {columns.map((column, index) => (
      <div key={index} className={`${column.name !== 'action' ? 'col' : 'col-action'}`}>
        {column.name.toUpperCase()}
      </div>
    ))}
  </li>
  )
}

export default ListHeader