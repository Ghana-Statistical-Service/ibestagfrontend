'use client'
import { URI } from '@/function/uri';
import RowFlexUi from '@/ui/RowFlex';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CardFront({ data, profile, email }) {
  const [qr, setqr] = useState("")
  useEffect(() => {
    let rt = `${URI}/profile/${email}/qrcode`
    console.log(rt)
   Axios.get(rt).then((res) => {
    setqr(res.data.qrCode)
   })
   .catch(err => console.log(err))
  }, [])
 
  return (
    <div className="card front" style={{ border: '2px solid #2E2A8F', width: '350px', fontFamily: 'Arial, sans-serif', position: 'relative' }}>

    
      <header>
        <div className='padding' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
        <img src="/images/1.png" alt="Ghana Coat of Arms" style={{ height: '50px' }} />
        <img src="/images/ibes.png" alt="Statistical Service Logo" style={{ height: '50px' }} />
        <img src="/images/3.png" alt="IBES Logo" style={{ height: '50px' }} />
      </div>


      <div style={{backgroundColor: '#2E2A8F', color: 'white', textAlign: 'center', padding: '5px', fontWeight: 'bold', fontSize: '12px' }}>
        GHANA 2025 INTEGRATED BUSINESS ESTABLISHMENT SURVEY II (IBES II)
      </div>
      </header>

     
<div>
        <div  id='profilePicture' style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {
          profile ?
            <img  src={`data:image/png;base64,${profile}`} alt="Profile" style={{ width: '180px', height: '240px', objectFit: 'cover', border: '1px solid black' }} />
            :
            <div style={{ width: '120px', height: '140px', border: '1px solid black', backgroundColor: '#eee' }}></div>
        }
      </div>

<div className='padding' style={{position:'relative'}}>
   {/* QR CODE TO BE FIXED HERE */}
      <div className='' style={{ width:"fit-content"}}>
          <img src={`${qr}`} alt="QR Code" style={{ width: '75px', height: '75px', position:"absolute" ,left:"-0.9rem"

           }} />
      </div>
      <div className='col fit text-center padding-left-50 padding-right-50'>
        <div className='h5' style={{ fontWeight: 'bold' }}>{data.name}</div>
        <div style={{ fontStyle: 'italic', marginTop: '5px' }}>{data.district}</div>
        <div style={{ marginTop: '5px', fontWeight: 'bold', color: '#2E2A8F' }}>{data.region}</div>
      </div>
</div>
</div>
{/* 

     

      {/* Footer Bar */}
      <div className='padding' style={{ backgroundColor: '#D6458A', color: 'white', textAlign: 'center', padding: '5px',  bottom: '0', width: '100%', fontSize: '12px' }}>
        www.statsghana.gov.gh
      </div>
    </div>
  );
}