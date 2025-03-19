import {
  DropdownIndicatorProps,
  GroupBase,
} from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class DropdownIndicator<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<DropdownIndicatorProps<Option, IsMulti, Group>> {}
