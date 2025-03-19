import { GroupBase, OptionProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Option<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<OptionProps<Option, IsMulti, Group>> {}
