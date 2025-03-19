import {
  GroupBase,
  MultiValueGenericProps,
} from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class MultiValueLabel<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<MultiValueGenericProps<Option, IsMulti, Group>> {}
