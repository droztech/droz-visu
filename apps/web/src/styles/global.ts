import { globalCss } from '@coaktion/visu'

export const appStyle = globalCss({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  '@import':
    'url("https://fonts.googleapis.com/css2?family=Kanit&display=swap")',

  '*': {
    fontFamily: '"Kanit", sans-serif',
  },
  body: {
    margin: 0,
  },
})
