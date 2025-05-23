import React from 'react';

import Select, {
  components,
  MenuListProps,
} from '@douglasgomes98/react-select';
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from '../data';

const menuHeaderStyle = {
  padding: '8px 12px',
  background: colourOptions[2].color,
  color: 'white',
};

const MenuList = (
  props: MenuListProps<ColourOption | FlavourOption, false, GroupedOption>
) => {
  return (
    <components.MenuList {...props}>
      <div style={menuHeaderStyle}>Custom Menu List</div>
      {props.children}
    </components.MenuList>
  );
};

export default () => (
  <Select<ColourOption | FlavourOption, false, GroupedOption>
    defaultValue={colourOptions[1]}
    options={groupedOptions}
    components={{ MenuList }}
  />
);
