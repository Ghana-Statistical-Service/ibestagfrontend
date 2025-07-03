import React from 'react'
import Input from 'funuicss/ui/input/Input'
import Text from 'funuicss/ui/text/Text'


export default function InputUi
({label, standard, hint, content, required, type,  ...rest }) {
  return <div>
    <Text 
    text={`${label || ''}  ${required ? '*' : ''}` || ''} 
    block 
    size='smaller' 
    uppercase 
    bold 
    color='primary'
    funcss='margin-bottom-10'
    />
  {
    content  || <Input type={type || 'text'} label={hint || ''} funcss={`${type == 'radio' ? 'width-60 no-padding': ' _card roundEdgeSmall text-minified' }`} borderless {...rest} fullWidth={type == 'radio' ? false : true} />
  }  
</div>
}
