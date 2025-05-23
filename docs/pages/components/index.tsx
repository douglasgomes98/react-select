import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import ExampleWrapper from '../../ExampleWrapper';
import {
  CustomClearIndicator,
  CustomControl,
  CustomDropdownIndicator,
  CustomGroup,
  CustomGroupHeading,
  CustomIndicatorsContainer,
  CustomIndicatorSeparator,
  CustomInput,
  CustomLoadingIndicator,
  CustomLoadingMessage,
  CustomMenu,
  CustomMenuList,
  CustomMultiValueContainer,
  CustomMultiValueLabel,
  CustomMultiValueRemove,
  CustomNoOptionsMessage,
  CustomOption,
  CustomPlaceholder,
  CustomSelectContainer,
  CustomSelectProps,
  CustomSingleValue,
  CustomValueContainer,
} from '../../examples';
import md from '../../markdown/renderer';

export default function Components() {
  return (
    <Fragment>
      <Helmet>
        <title>Components - React Select</title>
        <meta
          name="description"
          content="The main feature of this library is providing consumers with the building blocks necessary to create their component."
        />
      </Helmet>
      {md`
        # Components

        The main feature of this library is providing consumers with the
        building blocks necessary to create _their_ component.

        The following components are customisable and switchable:
          * ClearIndicator
          * Control
          * DropdownIndicator
          * DownChevron
          * CrossIcon
          * Group
          * GroupHeading
          * IndicatorsContainer
          * IndicatorSeparator
          * Input
          * LoadingIndicator
          * Menu
          * MenuList
          * MenuPortal
          * LoadingMessage
          * NoOptionsMessage
          * MultiValue
          * MultiValueContainer
          * MultiValueLabel
          * MultiValueRemove
          * Option
          * Placeholder
          * SelectContainer
          * SingleValue
          * ValueContainer

        ## Replacing Components

        React-Select allows you to augment layout and functionality by replacing
        the default components with your own, using the \`components\`
        property. These components are given all the current props and state
        letting you achieve anything you dream up.

        ## Inner Ref
        Some components also take an innerRef prop that react-select needs in
        order to manage internal behaviour. Please assign this to the ref
        property of the relevant react-element. For example:

        ~~~~
        const CustomOption = ({ innerRef, innerProps }) => (
        <div ref={innerRef} {...innerProps} />)
        ~~~~

        ### Inner Props

        All functional properties that the component needs are provided in
        \`innerProps\` which you must spread.

        ### Common Props

        Every component receives \`commonProps\` which are spread onto
        the component. These include:

        * \`clearValue\`
        * \`getStyles\`
        * \`getValue\`
        * \`hasValue\`
        * \`isMulti\`
        * \`isRtl\`
        * \`options\`
        * \`selectOption\`
        * \`setValue\`
        * \`selectProps\`

        ~~~jsx
        import React from 'react';
        import Select from '@douglasgomes98/react-select';

        const CustomOption = ({ innerProps, isDisabled }) =>
          !isDisabled ? (
            <div {...innerProps}>{/* your component internals */}</div>
          ) : null;

        class Component extends React.Component {
          render() {
            return <Select components={{ Option: CustomOption }} />;
          }
        }

        ~~~

        ## Defining components

        When defining replacement components, it is important to do so __outside__ the scope of
        rendering the Select. Defining a replacement component directly in the components prop can
        cause issues.

        On this topic, React
        [documentation](https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method)
        has the following to say:

        > The problem here isn’t just about performance — remounting a component causes the state
        of that component and all of its children to be lost.

        This statement applies as well when replacing components in react-select with inline definitions.

        ~~~jsx
        // Bad: Inline declaration will cause remounting issues
        const BadSelect = props => (
          <Select {...props} components={{
            Control: ({ children, ...rest }) => (
              <components.Control {...rest}>
                👎 {children}
              </components.Control>
            )}}
          />
        )

        // Good: Custom component declared outside of the Select scope
        const Control = ({ children, ...props }) => (
          <components.Control {...props}>
            👍 {children}
          </components.Control>
        );

        const GoodSelect = props => <Select {...props} components={{ Control }} />

        ~~~

        There will likely be times that data or methods may need to be shared,
        but this can be achieved with the \`selectProps\` prop passed to each component.

        ${(
          <ExampleWrapper
            label="Custom Component with selectProps Example"
            urlPath="docs/examples/CustomSelectProps.tsx"
            raw={require('!!raw-loader!../../examples/CustomSelectProps.tsx')}
          >
            <CustomSelectProps />
          </ExampleWrapper>
        )}

        ~~~
        ~~~

        ## Adjusting the Styling

        The \`styles\` prop allows you to pass styles to a particular component, without
        replacing the entire component. If you only want to change styling, you should
        start by using the \`styles\` prop.

        ## Replaceable components

        ### ClearIndicator

        The indicator presented to clear the values from the component. The default
        component is a cross. The conditions under which the indicator will not be
        rendered when:

        * When \`isClearable\` is false, or when \`isMulti\` is false, and \`isClearable\` is undefined
        * When the select is disabled
        * When the select has no value
        * When the select is loading

        See [props docs](/props#clearindicator) for more details

        ${(
          <ExampleWrapper
            label="Custom ClearIndicator Example"
            urlPath="docs/examples/CustomClearIndicator.tsx"
            raw={require('!!raw-loader!../../examples/CustomClearIndicator.tsx')}
          >
            <CustomClearIndicator />
          </ExampleWrapper>
        )}

        ### Control

        The second highest level wrapper around the components. It is responsible for the
        positioning of the \`ValueContainer\` and \`IndicatorsContainer\`. It is followed
        by the Menu.

        See [props docs](/props#control) for more details

        ${(
          <ExampleWrapper
            label="Custom Control Example"
            urlPath="docs/examples/CustomControl.tsx"
            raw={require('!!raw-loader!../../examples/CustomControl.tsx')}
          >
            <CustomControl />
          </ExampleWrapper>
        )}

        ### Dropdown Indicator

        The indicator for opening the select, designed to indicate to users that
        this is a select. By default it is a chevron pointed down.

        See [props docs](/props#dropdownindicator) for more details

        ${(
          <ExampleWrapper
            label="Custom Dropdown Indicator Example"
            urlPath="docs/examples/CustomDropdownIndicator.tsx"
            raw={require('!!raw-loader!../../examples/CustomDropdownIndicator.tsx')}
          >
            <CustomDropdownIndicator />
          </ExampleWrapper>
        )}

        ### Group

        The wrapper around each group if the Select has groups in its data. The default
        component is responsible both for mapping its options, as well as rendering
        its data into the GroupHeading.

        See [props docs](/props#group) for more details

        ${(
          <ExampleWrapper
            label="Custom Group Example"
            urlPath="docs/examples/CustomGroup.tsx"
            raw={require('!!raw-loader!../../examples/CustomGroup.tsx')}
          >
            <CustomGroup />
          </ExampleWrapper>
        )}

        ### GroupHeading

        Component that renders the data of a group.

        See [props docs](/props#groupheading) for more details

        ${(
          <ExampleWrapper
            label="Custom GroupHeading Example"
            urlPath="docs/examples/CustomGroupHeading.tsx"
            raw={require('!!raw-loader!../../examples/CustomGroupHeading.tsx')}
          >
            <CustomGroupHeading />
          </ExampleWrapper>
        )}

        ### IndicatorsContainer

        Wraps the indicators. This is one of the two components directly under the
        control. The indicators that \`react-select\` will check to render by are:

        * Clear Indicator
        * Loading Indicator
        * Dropdown Indicator

        See [props docs](/props#indicatorscontainer) for more details

        ${(
          <ExampleWrapper
            label="Custom IndicatorsContainer Example"
            urlPath="docs/examples/CustomIndicatorsContainer.tsx"
            raw={require('!!raw-loader!../../examples/CustomIndicatorsContainer.tsx')}
          >
            <CustomIndicatorsContainer />
          </ExampleWrapper>
        )}

        ### Indicator Separator

        Component directly to the the inner side of the Dropdown Indicator. By default
        it is a line to act as a visual separator.

        See [props docs](/props#customindicatorseparator) for more details

        ${(
          <ExampleWrapper
            label="Custom IndicatorSeparator Example"
            urlPath="docs/examples/CustomIndicatorSeparator.tsx"
            raw={require('!!raw-loader!../../examples/CustomIndicatorSeparator.tsx')}
          >
            <CustomIndicatorSeparator />
          </ExampleWrapper>
        )}

        ### Input

        Input to render when an input is required. If the select is not searchable,
        a dummy input is rendered instead. If the select is disabled, a div of the
        correct size and shape is rendered.

        All provided inputs are given aria attributes to ensure the input is accessible
        by default.

        See [props docs](/props#input) for more details

        ${(
          <ExampleWrapper
            label="Custom Input Example"
            urlPath="docs/examples/CustomInput.tsx"
            raw={require('!!raw-loader!../../examples/CustomInput.tsx')}
          >
            <CustomInput />
          </ExampleWrapper>
        )}

        ### LoadingIndicator

        Loading indicator to be displayed in the Indicators Container when \`isLoading\`
        is true. By default it is three dots.

        See [props docs](/props#loadingindicator) for more details

        ${(
          <ExampleWrapper
            label="Custom LoadingIndicator Example"
            urlPath="docs/examples/CustomLoadingIndicator.tsx"
            raw={require('!!raw-loader!../../examples/CustomLoadingIndicator.tsx')}
          >
            <CustomLoadingIndicator />
          </ExampleWrapper>
        )}

        ### Menu

        The wrapper for the dropdown menu in the select. It is responsible for wrapping
        the menu items. If you want to modify the options themselves, you should use
        the \`Option\` component.

        See [props docs](/props#menu) for more details

        ${(
          <ExampleWrapper
            label="Custom Menu Example"
            urlPath="docs/examples/CustomMenu.tsx"
            raw={require('!!raw-loader!../../examples/CustomMenu.tsx')}
          >
            <CustomMenu />
          </ExampleWrapper>
        )}

        ### MenuList

        Inner wrapper for the menu. It directly wraps around the returned options.

        See [props docs](/props#menulist) for more details

        ${(
          <ExampleWrapper
            label="Custom MenuList Example"
            urlPath="docs/examples/CustomMenuList.tsx"
            raw={require('!!raw-loader!../../examples/CustomMenuList.tsx')}
          >
            <CustomMenuList />
          </ExampleWrapper>
        )}

        ### LoadingMessage

        Message to display in the menu when there are no options and \`isLoading\` is
        true. By default it is 'Loading...'

        See [props docs](/props#loadingmessage) for more details

        ${(
          <ExampleWrapper
            label="Custom LoadingMessage Example"
            urlPath="docs/examples/CustomLoadingMessage.tsx"
            raw={require('!!raw-loader!../../examples/CustomLoadingMessage.tsx')}
          >
            <CustomLoadingMessage />
          </ExampleWrapper>
        )}

        ### NoOptionsMessage

        Message to be displayed in the menu if there are no options passed in.

        See [props docs](/props#nooptionsmessage) for more details

        ${(
          <ExampleWrapper
            label="Custom NoOptionsMessage Example"
            urlPath="docs/examples/CustomNoOptionsMessage.tsx"
            raw={require('!!raw-loader!../../examples/CustomNoOptionsMessage.tsx')}
          >
            <CustomNoOptionsMessage />
          </ExampleWrapper>
        )}

        ### MultiValue

        Component used to display a selected option in the input when \`isMulti\` is
        true. Takes responsibility for rendering the \`MultiValueContainer\`,
        \`MultiValueLabel\`, and \`MultiValueRemove\`.

        ### MultiValueContainer

        Wraps the Label and Remove in a Multi Value

        See [props docs](/props#multivaluecontainer) for more details

        ${(
          <ExampleWrapper
            label="Custom MultiValueContainer Example"
            urlPath="docs/examples/CustomMultiValueContainer.tsx"
            raw={require('!!raw-loader!../../examples/CustomMultiValueContainer.tsx')}
          >
            <CustomMultiValueContainer />
          </ExampleWrapper>
        )}

        ### MultiValueLabel

        Receives the value of the option and is responsible for rendering it to the
        input.

        See [props docs](/props#multivaluelabel) for more details

        ${(
          <ExampleWrapper
            label="Custom MultiValueLabel Example"
            urlPath="docs/examples/CustomMultiValueLabel.tsx"
            raw={require('!!raw-loader!../../examples/CustomMultiValueLabel.tsx')}
          >
            <CustomMultiValueLabel />
          </ExampleWrapper>
        )}


        ### MultiValueRemove

        Receives an onClick to remove the selected item. By default it is a cross.

        See [props docs](/props#multivalueremove) for more details

        ${(
          <ExampleWrapper
            label="Custom MultiValueRemove Example"
            urlPath="docs/examples/CustomMultiValueRemove.tsx"
            raw={require('!!raw-loader!../../examples/CustomMultiValueRemove.tsx')}
          >
            <CustomMultiValueRemove />
          </ExampleWrapper>
        )}

        ### Option

        Component responsible for displaying an option in the menu.

        See [props docs](/props#option) for more details

        ${(
          <ExampleWrapper
            label="Custom Option Example"
            urlPath="docs/examples/CustomOption.tsx"
            raw={require('!!raw-loader!../../examples/CustomOption.tsx')}
          >
            <CustomOption />
          </ExampleWrapper>
        )}


        ### Placeholder

        Component to be displayed in the input when nothing is selected. By default
        it is the text 'Select...'

        See [props docs](/props#placeholder) for more details

        ${(
          <ExampleWrapper
            label="Custom Placeholder Example"
            urlPath="docs/examples/CustomPlaceholder.tsx"
            raw={require('!!raw-loader!../../examples/CustomPlaceholder.tsx')}
          >
            <CustomPlaceholder />
          </ExampleWrapper>
        )}

        ### SelectContainer

        The wrapper around the entire select component.

        See [props docs](/props#selectcontainer) for more details

        ${(
          <ExampleWrapper
            label="Custom SelectContainer Example"
            urlPath="docs/examples/CustomSelectContainer.tsx"
            raw={require('!!raw-loader!../../examples/CustomSelectContainer.tsx')}
          >
            <CustomSelectContainer />
          </ExampleWrapper>
        )}

        ### SingleValue

        The component that displays the selected value in the input for a single select.

        See [props docs](/props#singlevalue) for more details

        ${(
          <ExampleWrapper
            label="Custom SingleValue Example"
            urlPath="docs/examples/CustomSingleValue.tsx"
            raw={require('!!raw-loader!../../examples/CustomSingleValue.tsx')}
          >
            <CustomSingleValue />
          </ExampleWrapper>
        )}

        ### ValueContainer

        Container responsible for loading the placeholder value and the input.

        See [props docs](/props#valuecontainer) for more details

        ${(
          <ExampleWrapper
            label="Custom ValueContainer Example"
            urlPath="docs/examples/CustomValueContainer.tsx"
            raw={require('!!raw-loader!../../examples/CustomValueContainer.tsx')}
          >
            <CustomValueContainer />
          </ExampleWrapper>
        )}
      `}
    </Fragment>
  );
}
