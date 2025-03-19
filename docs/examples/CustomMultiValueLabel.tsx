import Tooltip from '@atlaskit/tooltip';
import Select, {
  components,
  MultiValueGenericProps,
} from '@douglasgomes98/react-select';
import React from 'react';
import { ColourOption, colourOptions } from '../data';

const MultiValueLabel = (props: MultiValueGenericProps<ColourOption>) => {
  return (
    <Tooltip content={'Customise your multi-value label component!'}>
      <components.MultiValueLabel {...props} />
    </Tooltip>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueLabel }}
    styles={{
      multiValueLabel: (base) => ({
        ...base,
        backgroundColor: colourOptions[2].color,
        color: 'white',
      }),
    }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
