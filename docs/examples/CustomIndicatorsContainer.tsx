import Select, {
  components,
  IndicatorsContainerProps,
} from '@douglasgomes98/react-select';
import React from 'react';
import { ColourOption, colourOptions } from '../data';

const IndicatorsContainer = (
  props: IndicatorsContainerProps<ColourOption, true>
) => {
  return (
    <div style={{ background: colourOptions[2].color }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ IndicatorsContainer }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
