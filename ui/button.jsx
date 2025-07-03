'use client'
import React from 'react'
import Button from 'funuicss/ui/button/Button'

export default function UiButton({primary, bg, text, funcss,  ...rest}) {
  return  <Button 
  bg={bg || ''}
  funcss={`${funcss || ''} ${!bg ? 'bg-primary': ''}`} 
  text={text || ''} 
  {...rest}
  bold
  />
  
}
