/* istanbul ignore file */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';
import { uppercase, currency, date } from '@/utils/helpers/filters';

import es from './assets/i18n/es.json';

const resources = { es };

i18n.use(initReactI18next).init({
  debug: config.DEBUG,
  resources,
  lng: 'es',
  fallbackLng: 'es',
  postProcess: ['reactPostprocessor'],
  interpolation: {
    escapeValue: false,
    format(value, format, lng) {
      const filters = {
        uppercase,
        currency,
        date,
      };

      if (format && format !== '') {
        return filters[format](value, lng);
      }

      return value;
    },
  },
});

moment.locale('es');

// * In case you need to change in another languaje
// ! Maker sure to include into the webpack.prod confgiguration
i18n.on('languageChanged', (lng) => {
  moment.locale(lng);
});

export default i18n;
