import { GroupBase, MultiValueProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class MultiValue<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<MultiValueProps<Option, IsMulti, Group>> {}
