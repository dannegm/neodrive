import theme from 'styled-theming';
import colors from './colors';

export default theme('backgroundColor', {
  base: colors.base,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  notification: colors.notification,
  label: colors.label,
  white: colors.white,
});
