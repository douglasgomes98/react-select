import { GroupBase, InputProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Input<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<InputProps<Option, IsMulti, Group>> {}
