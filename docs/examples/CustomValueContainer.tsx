import Select, {
  components,
  ValueContainerProps,
} from '@douglasgomes98/react-select';
import React from 'react';
import { ColourOption, colourOptions } from '../data';

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<ColourOption>) => (
  <components.ValueContainer {...props}>{children}</components.ValueContainer>
);

export default () => (
  <Select
    defaultValue={colourOptions[0]}
    isClearable
    styles={{
      singleValue: (base) => ({ ...base, color: 'white' }),
      valueContainer: (base) => ({
        ...base,
        background: colourOptions[2].color,
        color: 'white',
        width: '100%',
      }),
    }}
    components={{ ValueContainer }}
    isSearchable
    name="color"
    options={colourOptions}
  />
);
