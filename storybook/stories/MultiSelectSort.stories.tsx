import Select, {
  components,
  MultiValueGenericProps,
  MultiValueProps,
  OnChangeValue,
  Props,
} from '@douglasgomes98/react-select';
import type { ComponentMeta } from '@storybook/react';
import * as React from 'react';
import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortableHandle,
  SortEndHandler,
} from 'react-sortable-hoc';
import { ColourOption, colourOptions } from '../data';

export default {
  title: 'Select/MultiSelectSort',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

export function MultiSelectSort() {
  const [selected, setSelected] = React.useState<readonly ColourOption[]>([
    colourOptions[4],
    colourOptions[5],
  ]);

  const onChange = (selectedOptions: OnChangeValue<ColourOption, true>) => {
    setSelected(selectedOptions);
  };

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    const newValue = arrayMove(selected, oldIndex, newIndex);
    setSelected(newValue);
    console.log(
      'Values sorted:',
      newValue.map((i) => i.value)
    );
  };

  return (
    <SortableSelect
      useDragHandle
      // react-sortable-hoc props:
      axis="xy"
      onSortEnd={onSortEnd}
      distance={4}
      // small fix for https://github.com/clauderic/react-sortable-hoc/pull/352:
      getHelperDimensions={({ node }) => node.getBoundingClientRect()}
      // react-select props:
      isMulti
      options={colourOptions}
      value={selected}
      onChange={onChange}
      components={{
        // @ts-ignore We're failing to provide a required index prop to SortableElement
        MultiValue: SortableMultiValue,
        MultiValueLabel: SortableMultiValueLabel,
      }}
      closeMenuOnSelect={false}
    />
  );
}

// =============================================================================
// Utils
// =============================================================================

function arrayMove<T>(array: readonly T[], from: number, to: number) {
  const slicedArray = array.slice();
  slicedArray.splice(
    to < 0 ? array.length + to : to,
    0,
    slicedArray.splice(from, 1)[0]
  );
  return slicedArray;
}

// =============================================================================
// Styled components
// =============================================================================

const SortableMultiValue = SortableElement(
  (props: MultiValueProps<ColourOption>) => {
    // this prevents the menu from being opened/closed when the user clicks
    // on a value to begin dragging it. ideally, detecting a click (instead of
    // a drag) would still focus the control and toggle the menu, but that
    // requires some magic with refs that are out of scope for this example
    function onMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.preventDefault();
      event.stopPropagation();
    }
    const innerProps = { ...props.innerProps, onMouseDown };
    return <components.MultiValue {...props} innerProps={innerProps} />;
  }
);

const SortableMultiValueLabel = SortableHandle(
  (props: MultiValueGenericProps) => <components.MultiValueLabel {...props} />
);

const SortableSelect = SortableContainer(Select) as React.ComponentClass<
  Props<ColourOption, true> & SortableContainerProps
>;
