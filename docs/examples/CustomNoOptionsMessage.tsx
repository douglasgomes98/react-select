import Tooltip from '@atlaskit/tooltip';
import Select, { components, NoticeProps } from '@douglasgomes98/react-select';
import React from 'react';
import { colourOptions } from '../data';

const msgStyles = {
  background: colourOptions[2].color,
  color: 'white',
};

const NoOptionsMessage = (props: NoticeProps) => {
  return (
    <Tooltip content="Custom NoOptionsMessage Component">
      <components.NoOptionsMessage {...props} />
    </Tooltip>
  );
};

const CustomNoOptionsMessage = () => {
  return (
    <Select
      isClearable
      components={{ NoOptionsMessage }}
      styles={{ noOptionsMessage: (base) => ({ ...base, ...msgStyles }) }}
      isSearchable
      name="color"
      options={[]}
    />
  );
};

export default CustomNoOptionsMessage;
