import React from 'react'
import Card from 'funuicss/ui/card/Card'
import Text from 'funuicss/ui/text/Text'
export default function CardUi({heading, funcss, body , children}) {
  return (
    <Card
    funcss={` ${funcss} roundEdge padding`}
    xl
    header={heading || ''}
    body={children ? children : body || ""}
    />
  )
}
