import React from 'react';

import './select.scss';

function Select({ options, onChange, value }) {
  return (
    <select name='cars' id='cars' className='select' onChange={onChange} value={value}>
      {options.map(({ name, value }) => (
        <option key={value} value={value}>{name}</option>
      ))}
    </select>
  );
}

export default Select;
