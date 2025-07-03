import React from 'react'
import Table from 'funuicss/ui/table/Table'
import AnimationUi from './Animation'

export default function TableUI({children , ...rest}) {
  return (
    <AnimationUi>
      <Table {...rest}>{ children || '' }</Table>
    </AnimationUi>
  )
}
