import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, {
  components,
  DropdownIndicatorProps,
} from '@douglasgomes98/react-select';
import React from 'react';
import { ColourOption, colourOptions } from '../data';

const DropdownIndicator = (
  props: DropdownIndicatorProps<ColourOption, true>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <EmojiIcon label="Emoji" primaryColor={colourOptions[2].color} />
    </components.DropdownIndicator>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ DropdownIndicator }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);
