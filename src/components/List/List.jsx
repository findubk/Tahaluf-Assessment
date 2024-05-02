import React from 'react';

import Skelton from '../Skelton/Skelton';

import './list.scss';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

function List({ data, columns, loading, onSelectListItem, error }) {

  const Skeletons = () => (
    <>
      {Array.from({ length: 6 }, (_, k) => (
        <Skelton key={k} />
      ))}
    </>
  );

  const MapListItems = () => (
    <>
      {data.map((item, index) => (
        <ListItem key={index} item={item} columns={columns} onSelectListItem={onSelectListItem} index={index} />
      ))}
    </>
  );

  return (
    <div className='list-container'>
      {loading ? (
        <Skeletons />
      ) : (
        <ul className='list'>
          <ListHeader columns={columns}></ListHeader>
          {error.length > 0 ? <div className='error'>{error}</div> : <MapListItems />}
        </ul>
      )}
    </div>
  );
}

export default List;
