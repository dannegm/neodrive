import React from 'react';
import { useTranslation } from 'react-i18next';

const Explorer = () => {
  const { t } = useTranslation();
  return <h1>{t('explorer.title')}</h1>;
};

export default Explorer;
