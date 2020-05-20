import { nativeTheme } from 'electron'

/** The default background color for the current theme
 *
 * Reference: https://material-ui.com/customization/palette/#dark-mode
 */
export function themeBackgroundColor () {
  return nativeTheme.shouldUseDarkColors ? '#303030' : '#fafafa'
}
