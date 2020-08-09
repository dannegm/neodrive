import React from 'react';
import { useTranslation } from 'react-i18next';

const E404 = () => {
  const { t } = useTranslation();
  return <h1>{t('error.404')}</h1>;
};

export default E404;
