/** @jsx jsx */
import Select, { OptionProps } from '@douglasgomes98/react-select';
import { jsx } from '@emotion/react';
import { ColourOption, colourOptions } from '../data';

const Option = (props: OptionProps<ColourOption>) => {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
  } = props;
  return (
    <div
      ref={innerRef}
      css={getStyles('option', props)}
      className={cx(
        {
          option: true,
          'option--is-disabled': isDisabled,
          'option--is-focused': isFocused,
          'option--is-selected': isSelected,
        },
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ Option }}
    styles={{
      option: (base) => ({
        ...base,
        border: `1px dotted ${colourOptions[2].color}`,
        height: '100%',
      }),
    }}
    defaultValue={colourOptions[4]}
    options={colourOptions}
  />
);
