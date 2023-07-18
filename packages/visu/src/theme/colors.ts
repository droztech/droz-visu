import { ThemeConfig } from 'tailwindcss/types/config'

export const colors = {
  background: '#FFFFFF',
  transparent: 'transparent',
  inherit: 'inherit',
  current: 'currentColor',

  primary: {
    DEFAULT: '#7900F2',
    100: '#F9F8FC',
    200: '#E4DBFF',
    300: '#AC85FF',
    400: '#7900F2',
    500: '#5300A7',
    600: '#3E007C',
    700: '#241534',
  },

  secondary: {
    DEFAULT: '#FD6D01',
    100: '#FFF8F2',
    200: '#FFDDC3',
    300: '#FDA562',
    400: '#FD6D01',
    500: '#E36100',
    600: '#C35400',
    700: '#A14600',
  },

  gray: {
    DEFAULT: '#C8C8C8',
    100: '#FFFFFF',
    200: '#F8F8F8',
    300: '#ECECEC',
    400: '#C8C8C8',
    500: '#888888',
    600: '#616161',
    700: '#474747',
    800: '#303030',
    900: '#000000',
  },

  success: {
    DEFAULT: '#32C09D',
    300: '#EDF7F5',
    400: '#32C09D',
    500: '#248870',
    600: '#1B6553',
    700: '#144A3D',
  },

  error: {
    DEFAULT: '#F20045',
    300: '#FDEDF2',
    400: '#F20045',
    500: '#CC003A',
    600: '#99002B',
    700: '#66001D',
  },

  alert: {
    DEFAULT: '#FFA624',
    300: '#FFF4E5',
    400: '#FFA624',
    500: '#E08401',
    600: '#B56A00',
    700: '#663C00',
  },
} satisfies ThemeConfig['colors']
