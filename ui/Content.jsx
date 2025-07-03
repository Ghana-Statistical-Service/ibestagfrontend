import React from 'react'

export default function Content({children}) {
  return (
        <div >
        <div className="_content">
        {children || ''}
        </div>
        </div>
  )
}
