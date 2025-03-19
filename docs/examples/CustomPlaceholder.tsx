import Select, {
  components,
  PlaceholderProps,
} from '@douglasgomes98/react-select';
import React from 'react';
import { ColourOption, colourOptions } from '../data';

const Placeholder = (props: PlaceholderProps<ColourOption>) => {
  return <components.Placeholder {...props} />;
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ Placeholder }}
    placeholder={'custom placeholder component'}
    styles={{
      placeholder: (base) => ({
        ...base,
        fontSize: '1em',
        color: colourOptions[2].color,
        fontWeight: 400,
      }),
    }}
    options={colourOptions}
  />
);
