import { ContainerProps, GroupBase } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class SelectContainer<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<ContainerProps<Option, IsMulti, Group>> {}
