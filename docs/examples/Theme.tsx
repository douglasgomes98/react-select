import React from 'react';

import Select from '@douglasgomes98/react-select';
import { flavourOptions } from '../data';

export default () => (
  <Select
    defaultValue={flavourOptions[2]}
    options={flavourOptions}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'hotpink',
        primary: 'black',
      },
    })}
  />
);
