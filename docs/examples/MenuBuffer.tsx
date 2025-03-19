import Select from '@douglasgomes98/react-select';
import React from 'react';

import { colourOptions } from '../data';

export default () => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}
    styles={{ menu: (base) => ({ ...base, marginBottom: 76 }) }}
  />
);
