import React from 'react'
import Alert from 'funuicss/ui/alert/Alert'

export default function AlertUi({children , success, ...rest}) {
  return (
    <Alert {...rest} animation='SlideDown' type={success ? 'success' : 'warning'} standard fixed='top-middle' />
  )
}
