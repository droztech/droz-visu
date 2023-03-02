import { css } from '@library'

export const Flex = css({
  display: 'flex',
  flexWrap: 'wrap',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      col: {
        flexDirection: 'column',
      },
    },
    center: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    items: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
      stretch: {
        justifyContent: 'stretch',
      },
    },
    text: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    red: {
      true: {
        backgroundColor: '#f00',
      },
    },
  },
})
