'use client'
import { useEffect, useState } from "react"
import { PiBell, PiChartBar, PiDiamondsFourDuotone, PiGear, PiGridFour, PiHospital, PiHouse, PiList, PiPackage, PiPaperPlaneTilt, PiSignOut, PiUser, PiUserCheckDuotone, PiUsers, PiVirus, PiX } from 'react-icons/pi';
import Text from 'funuicss/ui/text/Text'

import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import Link from "next/link";
import RowFlex from "funuicss/ui/specials/RowFlex"
import Section from "funuicss/ui/specials/Section"
import Circle from "funuicss/ui/specials/Circle"
import Logo from "./Logo";
import { PiCaretDown } from "react-icons/pi"
import DropUp from 'funuicss/ui/drop/Up'
import DropDown from 'funuicss/ui/drop/Down'
import DropItem from 'funuicss/ui/drop/Item'
import DropMenu from 'funuicss/ui/drop/Menu'
import Button from 'funuicss/ui/button/Button'
import Image from "next/image";


export default function Side({active}) {
//    const [user, setuser] = useState('')
//    const [get_user, setget_user] = useState(false)

//    useEffect(() => {
//     GetOnlineUser()
//     .then(res => {
//       setuser(res.user)
//       setget_user(true)
//     })
//     .catch(err => console.log(err))
//    }, [get_user])
   
    const mainSectionLinks = [
     
        {
           "route" : "/new/staff" ,
           "icon" : <PiUsers /> ,
           "text" : "Staffs" ,
        }
        ,
        {
           "route" : "/new/branch" ,
           "icon" : <PiDiamondsFourDuotone /> ,
           "text" : "Branchs" ,
        }
        ,
        {
           "route" : "/new/hospital" ,
           "icon" : <PiHospital /> ,
           "text" : "Hospital" ,
        }
        ,
        {
           "route" : "/new/doctor" ,
           "icon" : <PiUserCheckDuotone /> ,
           "text" : "Doctor" ,
        }
        ,
        {
           "route" : "/new/test" ,
           "icon" : <PiVirus /> ,
           "text" : "Test" ,
        }
     
     ]
     const SettingsSectionLinks = [
        {
           "route" : "/smtp" ,
           "icon" : <PiGear /> ,
           "text" : "SMTP" ,
        },
        {
           "route" : "/welcome" ,
           "icon" : <PiUser /> ,
           "text" : "Intro Message" ,
        }
        ,
        {
           "route" : "/templates" ,
           "icon" : <PiGridFour /> ,
           "text" : "Templates" ,
        }
     
     ]
  return (
   <div>
        <div className="_bar">
         <div>
            <Logo />
         </div>
         {/* <div>
            {
               user &&
               <DropDown side='right'>
                <Image src={user.photo_url} alt="User profile picture" width={40} height={40} className="pointer" />
             <DropMenu 
             animation="ScaleUp" 
             funcss='text-small'
             hoverable="hoverable" 
             width='150px'
             duration={0.2}>
                 <Link href={`/${user.handle}`}>
                 <DropItem>View my page</DropItem>
                 </Link>
                 <Link href={'/page'}>
                 <DropItem>Edit Page</DropItem>
                 </Link>
                 <div className='bb'/>
                 <span onClick={() => SignOut()}><DropItem>Logout</DropItem></span>
             </DropMenu>
            </DropDown>
            }
         </div> */}
   </div>
    <div className='side'>
    
         <div className="text-center bb padding-bottom-10">
            <div>
               {
                  true ?
            <Image src={'/memojis/4.png'} alt="User profile picture" width={50} height={50} className="pointer" />
            : <Circle bg='dark800' funcss='width-70 height-70 center skeleton'/>
               }
            </div>
            {
               true ?
               <Text text={"Lab Account"} color='dark300' size='small'/>:
               <div className="dark800 skeleton mini_skeleton  width-90-p center margin-bottom-5 margin-top-10 roundEdgeSmall" />
            }
            {
               true ?
               <Text text={'Ahmed Salim Adam'} color='dark400' block bold size='smaller'/>:
               <div className="dark800 skeleton mini_skeleton width-90-p center roundEdgeSmall" />
            }
           </div>
        
<Section gap={1}>
   <Text size="smaller"  uppercase letterSpacing='0.1rem' text="Configurations" block funcss="padding-bottom-10" />
<List >
     
     {
        mainSectionLinks && 
        mainSectionLinks.map(res => (
           <ListItem key={res.route}  >
           <Link href={res.route}>
              <RowFlex gap={0.5} funcss={` padding-5 roundEdgeSmall ${res.route == active ? "dark800" : ""}`}>
                 <div className="width-30 height-30  central roundEdgeSmall dark900 text-primary">
                   {res.icon}
                 </div>
                 <Text 
                 text={res.text} 
                 color="dark300"
                 size="small"
                 />
              </RowFlex>
           </Link>
        </ListItem>
        ))
     }
  </List>
</Section>

{/* <Text size="smaller"  uppercase letterSpacing='0.1rem' text="Settings" block funcss="padding-bottom-10 padding-top-10" />
<List >
     
     {
        SettingsSectionLinks && 
        SettingsSectionLinks.map(res => (
           <ListItem key={res.route}  >
           <Link href={res.route}>
              <RowFlex gap={0.5} funcss={` padding-5 roundEdgeSmall ${res.route == active ? "dark800" : ""}`}>
                 <div className="width-30 height-30  central roundEdgeSmall dark900 text-dark">
                   {res.icon}
                 </div>
                 <Text 
                 text={res.text} 
                 color="dark300"
                 size="small"
                 />
              </RowFlex>
           </Link>
        </ListItem>
        ))
     }
  </List> */}
    </div>
</div>
  )
}
