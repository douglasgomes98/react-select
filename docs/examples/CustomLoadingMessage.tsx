import Tooltip from '@atlaskit/tooltip';
import { NoticeProps } from '@douglasgomes98/react-select';
import AsyncSelect from '@douglasgomes98/react-select/async';
import React, { CSSProperties } from 'react';
import { ColourOption, colourOptions } from '../data';

const LoadingMessage = (props: NoticeProps<ColourOption, false>) => {
  return (
    <Tooltip content={'Custom Loading Message'}>
      <div
        {...props.innerProps}
        style={props.getStyles('loadingMessage', props) as CSSProperties}
      >
        {props.children}
      </div>
    </Tooltip>
  );
};

const filterColors = (inputValue: string) =>
  colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = (inputValue: string) =>
  new Promise<ColourOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

const CustomLoadingMessage = () => {
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={promiseOptions}
      styles={{
        loadingMessage: (base) => ({
          ...base,
          backgroundColor: colourOptions[2].color,
          color: 'white',
        }),
      }}
      components={{ LoadingMessage }}
    />
  );
};

export default CustomLoadingMessage;
