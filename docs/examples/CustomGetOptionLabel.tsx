import Select from '@douglasgomes98/react-select';
import React from 'react';
import { flavourOptions } from '../data';

export default () => (
  <>
    <p>
      Composing a display label from the label property and rating property in
      the options object
    </p>
    <Select
      defaultValue={flavourOptions[0]}
      isClearable
      isSearchable
      name="color"
      options={flavourOptions}
      getOptionLabel={(option) => `${option.label}: ${option.rating}`}
    />
  </>
);
