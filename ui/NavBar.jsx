'use client'
import React, { useEffect, useState } from 'react'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Logo from './Logo'
import { PiChartBar, PiChartDonut, PiDeviceMobile, PiHouse, PiImage, PiList, PiListDuotone, PiPhone, PiProjectorScreen, PiTable, PiTrendUp, PiUserPlus } from 'react-icons/pi'
import RowFlexUi from './RowFlex'
import Link from 'next/link'
import TextUi from './Text'
import UiButton from './button'
import { GetToken, SignOut } from '@/function/Auth'

export default function NavBar() {
  const [user, setuser] = useState()
  useEffect(() => {
    GetToken()
    .then((res) => {
      setuser(res.user)
    })
  }, [])
  
 if (user) return (<>
 <AppBar 
  funcss='card height-70 '
  fixedTop
  left={<TextUi text="GSS ID Card System" heading='h4' bold color='dark400'/>}
  center={<RowFlexUi gap={2}>
    <Link href={'/upload'}>
   <RowFlexUi gap={0.2}>
   <PiImage /> <TextUi text="Upload" size='smaller' bold color='dark300' uppercase/> 
   </RowFlexUi> 
    </Link>
  </RowFlexUi>}
  right={<RowFlexUi gap={1}>
  <div>
  <TextUi text={user ? user.fullname : ''}  block />
  <TextUi text={user ? user.level : ''} bold size='small' />
  </div>
  <UiButton funcss={'_logout _card'} bold color='error' bg='error200' onClick={SignOut} text={"LogOut"} small />
  </RowFlexUi>}
  />
 </>)
  if(!user) return null
}
