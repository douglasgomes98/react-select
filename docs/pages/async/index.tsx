import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import {
  AsyncCallbacks,
  AsyncMulti,
  AsyncPromises,
  DefaultOptions,
} from '../../examples';
import ExampleWrapper from '../../ExampleWrapper';
import md from '../../markdown/renderer';

export default function Async() {
  return (
    <Fragment>
      <Helmet>
        <title>Async - React Select</title>
        <meta name="description" content="The react-select Async Component." />
      </Helmet>
      {md`
    # Async
    Use the Async component to load options from a remote source as the user types.

    ~~~jsx
    import Async, { useAsync } from '@douglasgomes98/react-select/async';
    ~~~

    ## Loading Asynchronously

    The loadOptions prop allows users to either resolve from a callback...

    ${(
      <ExampleWrapper
        label="Callbacks"
        urlPath="docs/examples/AsyncCallbacks.tsx"
        raw={require('!!raw-loader!../../examples/AsyncCallbacks.tsx')}
      >
        <AsyncCallbacks />
      </ExampleWrapper>
    )}

    or resolve from a returned promise....

    ${(
      <ExampleWrapper
        label="Promises"
        urlPath="docs/examples/AsyncPromises.tsx"
        raw={require('!!raw-loader!../../examples/AsyncPromises.tsx')}
      >
        <AsyncPromises />
      </ExampleWrapper>
    )}

    ${(
      <ExampleWrapper
        label="Async MultiSelect"
        urlPath="docs/examples/AsyncMulti.tsx"
        raw={require('!!raw-loader!../../examples/AsyncMulti.tsx')}
      >
        <AsyncMulti />
      </ExampleWrapper>
    )}

    ## defaultOptions

    The defaultOptions prop determines "when" your remote request is initially fired. There are two valid values for this property. Providing an option array to this prop will populate the initial set of options used when opening the select, at which point the remote load only occurs when filtering the options (typing in the control). Providing the prop by itself (or with 'true') tells the control to immediately fire the remote request, described by your loadOptions, to get those initial values for the Select.

    ${(
      <ExampleWrapper
        label="Async with defaultOptions provided"
        urlPath="docs/examples/DefaultOptions.tsx"
        raw={require('!!raw-loader!../../examples/DefaultOptions.tsx')}
      >
        <DefaultOptions />
      </ExampleWrapper>
    )}

    ${(
      <ExampleWrapper
        label="Async with defaultOptions as true"
        urlPath="docs/examples/AsyncPromises.tsx"
        raw={require('!!raw-loader!../../examples/AsyncPromises.tsx')}
      >
        <AsyncPromises />
      </ExampleWrapper>
    )}
  `}
    </Fragment>
  );
}
