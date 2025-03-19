import { GroupBase, MenuProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Menu<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<MenuProps<Option, IsMulti, Group>> {}
