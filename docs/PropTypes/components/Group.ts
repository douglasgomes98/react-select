import { GroupBase, GroupProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Group<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<GroupProps<Option, IsMulti, Group>> {}
