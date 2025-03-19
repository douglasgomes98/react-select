import { GroupBase, LoadingIndicatorProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class LoadingIndicator<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<LoadingIndicatorProps<Option, IsMulti, Group>> {}
