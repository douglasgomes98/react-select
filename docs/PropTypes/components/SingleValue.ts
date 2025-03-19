import { GroupBase, SingleValueProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class SingleValue<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<SingleValueProps<Option, IsMulti, Group>> {}
