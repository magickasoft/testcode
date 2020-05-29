import { Icon } from 'components/Icon';
import { Link, LinkDefaultProps, LinkPropTypes } from 'components/Link';
import { bool, func } from 'prop-types';
import React from 'react';
import bem from 'utils/bem';
import { ElementPropTypes } from 'utils/prop-types';
import { filter, prefixBy, prefixed, unprefixed } from 'utils/props';
import { MainBarButton, MainBarButtonDefaultProps, MainBarButtonPropTypes } from '../Button';
import { MainBarLogo, MainBarLogoDefaultProps, MainBarLogoPropTypes } from '../Logo';

import './Bar.scss';

export const BarPropTypes = {
  ...ElementPropTypes,
  ...prefixBy('header', ElementPropTypes),
  ...prefixBy('button', MainBarButtonPropTypes),
  ...prefixBy('logo', MainBarLogoPropTypes),
  ...prefixBy('help', LinkPropTypes),
  ...prefixBy('content', ElementPropTypes),

  minimized: bool,
  onToggle: func
};

export const BarDefaultProps = {
  ...prefixBy('button', MainBarButtonDefaultProps),
  ...prefixBy('logo', MainBarLogoDefaultProps),
  ...prefixBy('help', LinkDefaultProps),
  minimized: false,
  onToggle: null
};

export const Bar = React.memo((properties: typeof BarPropTypes) => {
  const hydratedProperties = { ...BarDefaultProps, ...properties };
  const { minimized, onToggle, children, className, ...props } = hydratedProperties;

  const renderContent = React.useCallback(() => {
    const { classNames: contentClassName, ...contentProps } = prefixed(props, 'content');

    return (
      <div
        {...filter(contentProps, ElementPropTypes)}
        className={bem.element(Bar, 'content', { minimized }, contentClassName)}
      >
        {children}
      </div>
    );
  }, [children, minimized, props]);

  const renderLogo = React.useCallback(() => {
    const { classNames: logoClassName, ...logoProps } = prefixed(props, 'logo');

    return (
      <MainBarLogo
        {...filter(logoProps, MainBarLogoPropTypes)}
        className={bem.element(Bar, 'logo', { minimized }, logoClassName)}
      />
    );
  }, [minimized, props]);

  const handleButtonClick = React.useCallback(() => {
    if (typeof onToggle === 'function') {
      onToggle();
    }
  }, []);

  const handleHelpClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      if ((window as any).zE) {
        (window as any).zE.activate();
        const zEForm = document.getElementById('webWidget');
        zEForm.style.left = `${minimized ? 50 : 225}px`;
      }
    },
    [minimized]
  );

  const renderButton = React.useCallback(() => {
    const { classNames: buttonClassName, ...buttonProps } = prefixed(props, 'button');

    return (
      <MainBarButton
        {...filter(buttonProps, MainBarButtonPropTypes)}
        minimized={minimized}
        className={bem.element(Bar, 'button', null, buttonClassName)}
        onClick={handleButtonClick}
      />
    );
  }, [minimized, props]);

  const renderHeader = React.useCallback(() => {
    const { classNames: headerClassName, ...headerProps } = prefixed(props, 'header');

    return (
      <div
        {...filter(headerProps, ElementPropTypes)}
        className={bem.element(Bar, 'header', { minimized }, headerClassName)}
      >
        {renderButton()}
        {renderLogo()}
      </div>
    );
  }, [minimized, props]);

  const renderHelp = React.useCallback(() => {
    const { classNames: helpClassName } = prefixed(props, 'help');

    return (
      <Link
        to="help"
        icon="help"
        icon-face={Icon.FACE_ACTIVE}
        icon-className={bem.element(Bar, 'helpIcon')}
        className={bem.element(Bar, 'help', { minimized }, helpClassName)}
        onClick={handleHelpClick}
      >
        <span className={bem.element(Bar, 'helpLabel', { minimized })}>Need help?</span>
      </Link>
    );
  }, [minimized, props]);

  return (
    <div
      {...filter(unprefixed(props, 'header', 'button', 'logo'), ElementPropTypes)}
      className={`${bem.block(Bar, { minimized })} ${className || ''}`}
    >
      {renderHeader()}
      {renderContent()}
      {renderHelp()}
    </div>
  );
});

(Bar as any).className = 'MainBar';
