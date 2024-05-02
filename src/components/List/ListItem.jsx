import React from 'react';

function ListItem({ item, columns, index, onSelectListItem }) {
  return (
    <li key={index} className='list-row' onClick={() => onSelectListItem(item)}>
      {columns.map((column, columnIndex) => (
        <>
          {column.name !== 'action' ? (
            <div key={columnIndex} className={'col'} data-label={column.name}>
              {item[column.dataKey] ?? 'N/A'}
            </div>
          ) : (
            <div
              key={columnIndex}
              className={'col-action action-button'}
              onClick={e => {
                e.stopPropagation();
                column.click(item);
              }}
            >
              Delete
            </div>
          )}
        </>
      ))}
    </li>
  );
}

export default ListItem;
