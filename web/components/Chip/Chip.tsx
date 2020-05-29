import * as React from 'react';
import Tag from 'antd/es/tag';
import { ChipFaces } from './ChipFaces';

import styles from './styles.module.css';

interface Properties {
  face?: ChipFaces;
  children?: React.ReactNode;
}

const defaultProperties: Properties = {
  face: ChipFaces.Default,
  children: undefined
};

export const Chip = React.memo((properties: Properties) => {
  const { face, children }: Properties = { ...defaultProperties, ...properties };

  return <Tag className={`${styles.chip} ${styles[`${face}Face`]}`}>{children}</Tag>;
});
