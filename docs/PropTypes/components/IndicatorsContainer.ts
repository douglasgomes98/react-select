import {
  GroupBase,
  IndicatorsContainerProps,
} from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class IndicatorsContainer<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<IndicatorsContainerProps<Option, IsMulti, Group>> {}
