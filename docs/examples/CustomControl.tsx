import React from 'react';

import Select, { components, ControlProps } from '@douglasgomes98/react-select';
import { ColourOption, colourOptions } from '../data';
const controlStyles = {
  border: '1px solid black',
  padding: '5px',
  background: colourOptions[2].color,
  color: 'white',
};

const ControlComponent = (props: ControlProps<ColourOption, false>) => (
  <div style={controlStyles}>
    <p>Custom Control</p>
    <components.Control {...props} />
  </div>
);

export default () => (
  <Select
    defaultValue={colourOptions[0]}
    isClearable
    components={{ Control: ControlComponent }}
    isSearchable
    name="color"
    options={colourOptions}
  />
);
