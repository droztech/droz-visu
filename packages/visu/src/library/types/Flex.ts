export type FlexDirection = keyof FlexDirectionClass

export type FlexDirectionClass = {
  col: string
  'col-reverse': string
  row: string
  'row-reverse': string
}

export type FlexItems = keyof FlexItemsClass

export type FlexItemsClass = {
  baseline: string
  center: string
  end: string
  start: string
  stretch: string
}

export type FlexJustify = keyof FlexJustifyClass

export type FlexJustifyClass = {
  around: string
  between: string
  center: string
  end: string
  evenly: string
  start: string
}

export type FlexText = keyof FlexTextClass

export type FlexTextClass = {
  center: string
  end: string
  justify: string
  left: string
  right: string
  start: string
}

export type FlexWrap = keyof FlexWrapClass

export type FlexWrapClass = {
  nowrap: string
  reverse: string
  wrap: string
}