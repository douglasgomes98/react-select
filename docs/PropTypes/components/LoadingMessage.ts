import { GroupBase, NoticeProps } from '@douglasgomes98/react-select';
import { Component } from 'react';

export default class LoadingMessage<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<NoticeProps<Option, IsMulti, Group>> {}
