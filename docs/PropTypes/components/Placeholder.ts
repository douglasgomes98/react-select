import { GroupBase, PlaceholderProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class Placeholder<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<PlaceholderProps<Option, IsMulti, Group>> {}
