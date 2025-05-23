import Select from '@douglasgomes98/react-select';
import React, { Fragment } from 'react';
import { dogOptions } from '../data';

export default function CustomGetOptionValue() {
  return (
    <Fragment>
      <p>Using id property, instead of value property.</p>
      <Select
        defaultValue={dogOptions[0]}
        isClearable
        isSearchable
        name="dog"
        options={dogOptions}
        getOptionValue={(option) => `${option['id']}`}
      />
    </Fragment>
  );
}
