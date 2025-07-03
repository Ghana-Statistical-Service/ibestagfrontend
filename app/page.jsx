
'use client'
import Div from 'funuicss/ui/div/Div'
import Section from 'funuicss/ui/specials/Section'
import Text from 'funuicss/ui/text/Text'
import Button from 'funuicss/ui/button/Button'
import Input from 'funuicss/ui/input/Input'
import  FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import { PiPaperPlaneRight , PiKey, PiCheck, PiPhone } from 'react-icons/pi';
import IconicInput from 'funuicss/ui/input/Iconic'
import Link from 'next/link'
import RowFlexUi from '@/ui/RowFlex'
import {FunGet} from 'funuicss/js/Fun'
import AlertUi from '@/ui/Alert'
import { useLayoutEffect, useState } from 'react'
import LoaderUi from '@/ui/LoaderUi'
import { URI } from '@/function/uri'
import Axios from 'axios'
import { SaveToken } from '@/function/Auth'

export default function Home() {
   const [message, setmessage] = useState('');
   const [alert_state, setalert_state] = useState(false);
   const [is_loading, setis_loading] = useState(false);

   useLayoutEffect(() => {
       setTimeout(() => {
           setmessage('');
           setalert_state(false);
       }, 2000);
   }, [alert_state, message]);
   
   const Submit = () => {
      let email, phone , uri
      email = FunGet.val('#email')
      phone = FunGet.val('#phone')
      uri = URI + '/login'

      if(email && phone){
          setis_loading(true)
          Axios.post(uri, {email, telephone1: phone})
         .then((data) => {
             setis_loading(false)
             let user
             user = data.data 
             SaveToken(user , '38383763638383663')
          })
         .catch(err => {
             setis_loading(false)
             setmessage('Error occured!')
             setalert_state('error')
             console.log(err)
          })
      }else{
         setmessage('Please fill in all fields!')
          setalert_state('error')
      }

   }
  return (
    <main >
       {is_loading && <LoaderUi />}
       {alert_state && <AlertUi message={message} success={alert_state === 'success'} />}
 <FullCenteredPage>
<div className='width-300-max fit'>
   <div className="section">
      <RowFlexUi gap={0.5} justify="">
      <img src="/images/1.png" className="height-30" alt="Logo 1" />
            <img src="/images/2.png" className="height-30" alt="Logo 2" />
            <img src="/images/3.png" className="height-30" alt="Logo 3" />
            <img src="/images/4.png" className="height-30" alt="Logo 4" />
            <img src="/images/5.png" className="height-30" alt="Logo 5" />
      </RowFlexUi>
   </div>
<div className="margin-bottom-40">
<Text
   text='Welcome'
   heading='h2'
   block
   />
   <Text
   text='Sign in to continue!'
   block
   />
</div>
<Section gap={1.5}>
   <Text text="Email*" funcss="margin-bottom-10"  block size="small" bold color="primary"/>
<IconicInput 
   leftIcon={ <PiPaperPlaneRight />}
   input={<Input type="email" fullWidth bordered id='email' />}
    />
</Section>
<Section gap={1}>
   <Text text="Phone Number*"  funcss="margin-bottom-10"  block size="small" bold color="primary"/>
<IconicInput 
   leftIcon={  <PiPhone />}
   input={<Input type="tel" fullWidth bordered id='phone' />}
    />
</Section>

     <div className="section">
       <Button
       onClick={Submit}
       text={"Sign in"}
       raised
       fullWidth
       bg='primary'
       bold
       />
</div>

   </div>
</FullCenteredPage>
    </main>
  );
}
