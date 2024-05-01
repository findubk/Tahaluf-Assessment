import React, { useId } from 'react';

import './list.scss';
import Skelton from '../Skelton/Skelton';

function List({ data, columns, loading, onSelectListItem, error }) {
  return (
    <div className='container'>
      {loading ? (
        <>
          {Array.from({ length: 6 }, (_, k) => (
            <Skelton key={k} />
          ))}
        </>
      ) : (
        <ul className='list'>
          <li className='list-header'>
            {columns.map((column, index) => (
              <div key={index} className={`${column.name !== 'action' ? 'col' : 'col-action'}`}>
                {column.name.toUpperCase()}
              </div>
            ))}
          </li>
          {error.length > 0 ? (
            <div className='error'>{error}</div>
          ) : (
            <>
              {data.map((item, index) => (
                <li key={useId()} className='list-row' onClick={() => onSelectListItem(item)}>
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
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default List;
