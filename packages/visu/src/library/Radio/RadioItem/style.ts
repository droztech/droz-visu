export const rootDisabledVariants = {
  disabledChecked: 'border-gray [&>*]:bg-gray',
  disabledUnchecked: 'border-gray',
}

export const rootCheckedVariants = {
  primary: {
    checked: 'border-primary [&>*]:bg-primary',
    unchecked: 'border-gray hover:border-primary [&:active>*]:bg-primary',
  },
  secondary: {
    checked: 'border-secondary [&>*]:bg-secondary',
    unchecked: 'border-gray hover:border-secondary [&:active>*]:bg-secondary',
  },
}
