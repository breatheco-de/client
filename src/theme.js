import { toTheme } from '@theme-ui/typography'
import _theme from 'typography-theme-grand-view'
import merge from 'deepmerge'

const theme = merge(toTheme(_theme), {
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#33e',
      secondary: '#33e',
      modes: {
        dark: {
            text: '#fff',
            background: '#000',
            primary: '#0cf',
            danger: '#b55d3e',
            grey200: '#eeeeee',
            grey100: '#424242',
        },
        light: {
            text: '#4a4a4a',
            background: '#FFFF',
            danger: '#b55d3e',
            primary: '#0cf',
            grey200: '#eeeeee',
            grey100: '#fafafa',
        }
      },
    },
    styles: {
        root:{
            h1: {
                fontSize: 24,
                color: 'text',
            },
        },
        a: {
            color: 'primary',
            textDecoration: 'none',
        },
        buttons: {
            '&:hover': {
                cursor: 'pointer',
                bg: 'secondary',
            }
        }
    }
})
export default theme