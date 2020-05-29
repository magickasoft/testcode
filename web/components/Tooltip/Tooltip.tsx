/* eslint-disable no-useless-computed-key */

import * as React from 'react';
import * as ReactTooltip from 'react-tooltip';

interface Properties {
  children?: React.ReactElement;
  content: React.ReactNode;
  id: string;
  type: ReactTooltip.Type;
  event?: string;
}

export const Tooltip = React.memo((props: Properties) => {
  const { id, type, children, content, event } = props;
  return (
    <>
      {React.cloneElement(children, { ['data-tip']: true, ['data-for']: id })}
      <ReactTooltip.default id={id} type={type} effect="solid" event={event || 'click'} eventOff="mouseout">
        {content}
      </ReactTooltip.default>
    </>
  );
});
