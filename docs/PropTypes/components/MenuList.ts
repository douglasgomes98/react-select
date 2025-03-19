import { GroupBase, MenuListProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class MenuList<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<MenuListProps<Option, IsMulti, Group>> {}
