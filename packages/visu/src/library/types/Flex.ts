export type FlexDirectionClass = {
  col: string
  'col-reverse': string
  row: string
  'row-reverse': string
}

export type FlexItemsClass = {
  baseline: string
  center: string
  end: string
  start: string
  stretch: string
}

export type FlexJustifyClass = {
  around: string
  between: string
  center: string
  end: string
  evenly: string
  start: string
}

export type FlexTextClass = {
  center: string
  end: string
  justify: string
  left: string
  right: string
  start: string
}

export type FlexWrapClass = {
  nowrap: string
  reverse: string
  wrap: string
}

export type FlexDirection = keyof FlexDirectionClass
export type FlexItems = keyof FlexItemsClass
export type FlexJustify = keyof FlexJustifyClass
export type FlexText = keyof FlexTextClass
export type FlexWrap = keyof FlexWrapClass
