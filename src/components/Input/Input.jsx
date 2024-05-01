import React from 'react';

import './input.scss';
function Input({ placeholder, value, onChange }) {
  return <input placeholder={placeholder} value={value} onChange={onChange} type='text' className='input'></input>;
}

export default Input;
