'use client'
import React, { useEffect } from 'react'
import Animation from "funuicss/ui/aos/AOS" 
import Aos from "aos"
export default function AnimationUi({children , ...rest}) {
    useEffect(() => {
        Aos.init()
        }, [])
  return (
    <Animation {...rest}> {children} </Animation>
  )
}
