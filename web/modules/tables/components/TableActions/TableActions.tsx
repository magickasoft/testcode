import * as React from 'react';
import { Link } from 'components/Link';
import { Icon } from 'components/Icon';
import { DropDownMenu, MenuItemType, MenuItemTextFace, MenuItemBehavior } from 'components/DropDownMenu';

import styles from './styles.module.css';

interface Props {
  items: {
    key: number;
    title?: React.ReactNode;
    behavior?: MenuItemBehavior;
    kind?: MenuItemType;
    url?: string;
    onClick?: () => any;
    iconName?: string;
    iconHoverFace?: 'primary' | 'danger';
    textFace?: MenuItemTextFace;
  }[];
  menuContainerId?: string;
}

export const TableActions = React.memo((props: Props) => {
  const { items, menuContainerId } = props;

  if (!items.length) {
    throw new Error('"TableActions" component needs at least one menu item.');
  }

  if (items.length > 1) {
    return <DropDownMenu menuContainerId={menuContainerId} items={items} />;
  }

  const { behavior, textFace, iconName, title, url, onClick } = items[0];

  const iconBox = iconName ? <Icon className={styles.icon} type={iconName} size={Icon.SIZE_SMALL} /> : null;

  return behavior === MenuItemBehavior.Button ? (
    // eslint-disable-next-line
    <span
      className={`${styles.text} ${textFace === MenuItemTextFace.Grey ? styles.textFaceGrey : styles.textFaceBlack}`}
      onClick={onClick}
    >
      {iconBox}
      {title}
    </span>
  ) : (
    <Link
      className={`${styles.text} ${textFace === MenuItemTextFace.Grey ? styles.textFaceGrey : styles.textFaceBlack}`}
      to={url}
    >
      {iconBox}
      {title}
    </Link>
  );
});
