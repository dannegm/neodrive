/* istanbul ignore file */
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
};
export default Home;