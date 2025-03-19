import { Component } from 'react';

import { GroupBase } from '@douglasgomes98/react-select';
import { Props, defaultProps } from '@douglasgomes98/react-select/src/Select';

export default class Select extends Component<
  Props<unknown, boolean, GroupBase<unknown>>
> {
  defaultProps = defaultProps;
}
