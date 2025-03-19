import { ControlProps, GroupBase } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Control<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<ControlProps<Option, IsMulti, Group>> {}
