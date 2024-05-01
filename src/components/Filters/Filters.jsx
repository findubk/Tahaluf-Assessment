import React, { useEffect, useState } from 'react';

import './filters.scss';
import Input from '../Input/Input';
import Select from '../Select/Select';

function Filters({ data, setFilteredData }) {
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('asc');

  const filterData = () => {
    if (data.length) {
      let filteredData = data.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });

      if (sort === 'asc') {
        filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
      }

      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    filterData();
  }, [searchText, sort]);

  return (
    <div className='filter-container'>
      <Input placeholder={'Search keyword'} value={searchText} onChange={e => setSearchText(e.target.value)}></Input>
      <Select
        value={sort}
        onChange={e => setSort(e.target.value)}
        options={[
          {
            name: 'Sort by name (A-Z)',
            value: 'asc',
          },
          {
            name: 'Sort by name (Z-A)',
            value: 'dec',
          },
        ]}
      ></Select>
    </div>
  );
}

export default Filters;
