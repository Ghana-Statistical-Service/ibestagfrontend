import React from 'react'
import TextUi from './Text'
import SectionUI from './section'
import RowFlexUi from './RowFlex'
import AnimationUi from './Animation'
export default function GraphContainer({title, subtitle, bottom, right, children}) {
  return (
    <AnimationUi animation='fade-down'>
           <div className='realtive fit _card margin-top-40 padding-20  text-smaller text-bold' >
             <RowFlexUi gap={2} justify='space-between'> 
                <div>
                <TextUi text={title || ''} heading='h2' bold color='dark400' block/>
                <TextUi text={subtitle || ''}  bold color='dark300' size='minified' />
                </div>
              {right || ''}
             </RowFlexUi>
             <SectionUI gap={2}/>
           <div className="dark900 padding-20 roundEdgeSmall" style={{overflowX:'auto'}}>
           <center>
            {children}
           </center>
           </div>
           <SectionUI gap={2}/>
           {bottom || ''}
           </div>
    </AnimationUi>
  )
}
