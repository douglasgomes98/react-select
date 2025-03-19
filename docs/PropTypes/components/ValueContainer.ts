import { GroupBase, ValueContainerProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class ValueContainer<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<ValueContainerProps<Option, IsMulti, Group>> {}
