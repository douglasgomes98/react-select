import { ClearIndicatorProps, GroupBase } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class ClearIndicator<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<ClearIndicatorProps<Option, IsMulti, Group>> {}
