import Select from '@douglasgomes98/react-select';
import React from 'react';
import { colourOptions } from '../data';

const filterOptions = (
  candidate: { label: string; value: string; data: any },
  input: string
) => {
  if (input) {
    return candidate.value === customOptions[0].value;
  }
  return true;
};

const customOptions = [
  {
    value: 'custom',
    label: 'Using a custom filter to always display this option on search',
  },
  ...colourOptions,
];

export default () => (
  <Select
    defaultValue={customOptions[0]}
    isClearable
    isSearchable
    name="color"
    options={customOptions}
    filterOption={filterOptions}
  />
);
