import React from 'react'
import Section from 'funuicss/ui/specials/Section'

export default function SectionUI({children , ...rest}) {
  return (
    <Section {...rest}>{ children || '' }</Section>
  )
}
