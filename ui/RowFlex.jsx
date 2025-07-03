import React from 'react'
import RowFlex from 'funuicss/ui/specials/RowFlex'

export default function RowFlexUi({children , ...rest}) {
  return (
    <RowFlex {...rest}>{ children || '' }</RowFlex>
  )
}
