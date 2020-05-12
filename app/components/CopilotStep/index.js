import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';
import { walkthroughable, CopilotStep as Step } from '@okgrow/react-native-copilot';

const WalkthroughableView = walkthroughable(View);

const CopilotStep = ({
  children,
  stepProps,
  Component,
  ...componentProps
}) => {
  const RenderComponent = Component ? walkthroughable(Component) : WalkthroughableView;
  return (
    !R.isNil(stepProps) && !R.isEmpty(stepProps) && !!stepProps ? (
      <Step {...stepProps}>
        <RenderComponent {...componentProps}>
          {children}
        </RenderComponent>
      </Step>
    ) : Component ? (
      <Component {...componentProps}>
        {children}
      </Component>
    ) : children
  );
};

CopilotStep.propTypes = {
  children: T.node,
  Component: T.any,
  stepProps: T.oneOfType([
    T.shape({
      name: T.string.isRequired,
      order: T.number.isRequired,
      text: T.string.isRequired
    }),
    T.bool
  ])
};

export default CopilotStep;
