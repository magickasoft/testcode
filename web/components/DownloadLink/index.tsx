/*
  eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions,
  jsx-a11y/anchor-is-valid
*/

import * as React from 'react';
import { api } from 'modules/api';
import { createReadApi } from 'utils/api/read';
import { Icon } from 'components/Icon';
import { fakeLinkDownload } from 'utils/fakeLinkDownload';

import * as styles from './styles.module.css';

interface Properties {
  baseUrl: string;
  parametersForm: any;
  children?: React.ReactNode;
  className?: string;
}

export const DownloadLink = React.memo((properties: Properties) => {
  const { children, className, baseUrl, parametersForm } = properties;

  const downloadFile = React.useCallback(() => {
    const readApi = createReadApi(api, { url: baseUrl });

    readApi.call(parametersForm).then(({ link }) => {
      fakeLinkDownload(link);
    });
  }, [parametersForm]);

  return (
    <a
      download
      className={`${styles.link} ${className || ''}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={downloadFile}
    >
      <Icon type="download" /> {children}
    </a>
  );
});
