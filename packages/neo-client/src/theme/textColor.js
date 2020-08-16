import theme from 'styled-theming';

import colors from './colors';

export default theme('textColor', {
  base: colors.base,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  notification: colors.notification,
  label: colors.label,
  inactive: colors.inactive,

  white: colors.white,
  black: colors.black,
});
