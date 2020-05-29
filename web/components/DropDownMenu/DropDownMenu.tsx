/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import AntDropDown from 'antd/es/dropdown';
import AntMenu from 'antd/es/menu';
import { Link } from 'components/Link';
import { Icon } from 'components/Icon';
import messages from './messages.json';
import { DropDownOpenButtonType } from './DropDownOpenButtonType';
import { DropDownOpenTrigger } from './DropDownOpenTrigger';
import { MenuItemBehavior } from './MenuItemBehavior';
import { MenuItemType } from './MenuItemType';
import { MenuItemTextFace } from './MenuItemTextFace';
import { DotsButton } from './DotsButton';

import styles from './styles.module.css';

type MenuItem = {
  key: number;
  title?: React.ReactNode;
  behavior?: MenuItemBehavior;
  kind?: MenuItemType;
  url?: string;
  onClick?: () => any;
  iconName?: string;
  iconHoverFace?: 'primary' | 'danger';
  textFace?: MenuItemTextFace;
};

interface Props {
  openButtonType?: DropDownOpenButtonType;
  openButtonElement?: React.ReactElement;
  openTrigger?: DropDownOpenTrigger;
  items: MenuItem[];
  menuContainerId?: string;
}

const defaultProps: Props = {
  openButtonType: DropDownOpenButtonType.Dots,
  openButtonElement: undefined,
  openTrigger: DropDownOpenTrigger.Click,
  items: []
};

export const DropDownMenu = React.memo((props: Props) => {
  const { openButtonType, openButtonElement, openTrigger, items, menuContainerId } = { ...defaultProps, ...props };
  const [open, setOpen] = React.useState(false);
  const switchPopover = React.useCallback(() => setOpen(!open), [open]);
  const closePopover = React.useCallback(() => setOpen(false), []);

  if (openButtonType === DropDownOpenButtonType.Custom && !openButtonElement) {
    throw new Error(messages.buttonTypeError);
  }

  const getFace = (textFace) => (textFace === MenuItemTextFace.Grey ? styles.textFaceGrey : styles.textFaceBlack);

  const Popover = (
    <AntMenu>
      {items.map(({ kind, behavior, title, onClick, url, iconName, textFace, key, iconHoverFace }) => {
        if (kind === MenuItemType.Divider) {
          return <AntMenu.Divider key={key} />;
        }

        const iconBox = iconName ? <Icon className={styles.icon} type={iconName} size={Icon.SIZE_SMALL} /> : null;

        return (
          <AntMenu.Item key={key}>
            {behavior === MenuItemBehavior.Button ? (
              <span className={`${styles.text} ${getFace(textFace)}`} onClick={onClick}>
                {iconBox}
                {title}
              </span>
            ) : (
              <Link
                className={`${styles.text} ${getFace(textFace)}`}
                to={url}
                onClick={closePopover}
                icon={iconName}
                icon-size={Icon.SIZE_SMALL}
                icon-className={iconHoverFace ? styles[`icon${iconHoverFace}`] : undefined}
              >
                {title}
              </Link>
            )}
          </AntMenu.Item>
        );
      })}
    </AntMenu>
  );

  return (
    <AntDropDown
      overlay={Popover}
      visible={open}
      onVisibleChange={setOpen}
      trigger={[openTrigger]}
      getPopupContainer={() => (menuContainerId ? document.getElementById(menuContainerId) : document.body)}
    >
      {openButtonType === DropDownOpenButtonType.Custom ? (
        openButtonElement
      ) : (
        <DotsButton open={open} onClick={switchPopover} />
      )}
    </AntDropDown>
  );
});
