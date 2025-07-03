'use client'
import CardBack from '@/component/CardBack';
import CardFront from '@/component/CardFront';
import React, { useEffect } from 'react';

const IDCARD = ({data , email}) => {

  useEffect(() => {
    if (data.profilePic) {
      const img = `
      <img src="data:image/png;base64,${data.profilePic}" alt="Profile Picture"  class="photo " />
    `
    if(document.getElementById('profilePicture')){
      document.getElementById('profilePicture').innerHTML = img
    }
    }
  },[data])
  return (
    <div className="padding-30 row-flex gap central">
      {
        <CardFront data={data} email={email}/>
      }
   {
    <CardBack data={data}  e/>
   }
    </div>
  );
};

export default IDCARD;
