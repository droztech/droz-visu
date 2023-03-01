import { css } from '@library'

export const Flex = css({
  display: 'flex',

  variants: {
    flow: {
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
      stretch: {
        justifyContent: 'stretch',
      },
    },
    // flex: {
    //   1: { flex: 1 },
    //   2: { flex: 2 },
    //   3: { flex: 3 },
    // },
    // gap: {
    //   xs: {
    //     gap: '$2',
    //   },
    //   sm: {
    //     gap: '$4',
    //   },
    //   md: {
    //     gap: '$14',
    //   },
    //   lg: {
    //     gap: '$24',
    //   },
    // },
    align: {
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
    emphasis: {
      true: {
        backgroundColor: '#f00',
      },
    },
  },
})
