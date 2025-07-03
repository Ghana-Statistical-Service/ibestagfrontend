'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import InputUi from '@/ui/input';
import TextUi from '@/ui/Text';
import Axios from 'axios'; // Assuming you're using axios for requests
import FullCenteredPage from 'funuicss/ui/specials/FullCenteredPage';
import SectionUI from '@/ui/section';
import { URI } from '@/function/uri';
import UiButton from '@/ui/button';
import { PiImage, PiPaperPlane } from 'react-icons/pi';
import { GetToken } from '@/function/Auth';
import LoaderUi from '@/ui/LoaderUi';
import AlertUi from '@/ui/Alert';
import Alert from 'funuicss/ui/alert/Alert'
import RowFlexUi from '@/ui/RowFlex';

export default function UploadID() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [message, setmessage] = useState('');
  const [alert_state, setalert_state] = useState(false);
  const [is_loading, setis_loading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
      setTimeout(() => {
          setmessage('');
          setalert_state(false);
      }, 2000);
  }, [alert_state, message]);


  const [user, setuser] = useState()
  useEffect(() => {
    GetToken()
    .then((res) => {
      setuser(res.user)
    })
  }, [])



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const size = file.size;
    console.log(size)
    if(size > 600000){
        setmessage('File size exceeds 600kb. Please choose a smaller file.');
        setalert_state('error')
        return;
    }else{
        // Create a preview URL for the selected file
        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);

        const img = new Image();
        img.src = fileUrl;
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
        };

        console.log(img.width)
        setSelectedFile(file);

   
    }


  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setmessage('Please select an image file to upload.');
      setalert_state('error')
      return;
    }

    setis_loading(true)
    const formData = new FormData();
    formData.append('profile_picture', selectedFile);
    const rt = URI + '/edit-profile-picture/' + user.email 
    console.log(rt)
    console.log(formData)
      Axios.put(rt , formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setis_loading(false);
        console.log(response)
        if (response.status === 200) {
            setmessage('Profile image uploaded successfully!');
            setalert_state('success')
            window.location.assign('/card/' + user.email)
          } else {
            setUploadMessage('Upload failed. Please try again.');
          }
      }).catch (error => {
        setis_loading(false);
            console.error('Error uploading image:', error);
            setUploadMessage('Upload failed. Please try again.');
      }) 
  };

  
if(user){
    return (
        <>
         {is_loading && <LoaderUi />}
         {alert_state && <AlertUi message={message} success={alert_state === 'success'} />}
        <div className='margin-top-100 padding-bottom-50'>
          <div className='width-400-max center fit'>
            <TextUi text={<>Welcome <span className="text-primary"> {user.name}</span></>} heading='h4' bold color='dark400' block />
            <TextUi text='Upload your profile picture' block />
            <SectionUI  gap={1}/>
            <RowFlexUi gap={1} justify='space-between'>
                <div>
                <TextUi text={`REGION`} size='small' bold color='gradient' />
                    <TextUi text={user.region} heading='h4' color='dark400' bold />
                </div>
                <div>
                <TextUi text={`DISTRICT`} size='small' bold color='gradient' />
                    <TextUi text={user.district} heading='h4' bold color='dark400' />
                </div>
            </RowFlexUi>
            <SectionUI />
               {previewUrl ? (
            <SectionUI gap={2}>
             <div className="text-center padding-20 border roundEdgeSmall">
             <img src={previewUrl} alt="Selected Image" style={{ maxWidth: '150px', height: 'auto' }} />
             </div>
            </SectionUI>
          ): 
          (
            <SectionUI gap={2}>
                <Alert funcss='card' message={<>image dimension should not exceed <span className="text-bold text-primary">600*800</span> & size should not exceed  <span className="text-bold text-primary">600KB</span></>} standard type='info'/>
            </SectionUI>
          )
        
        }
            <center>
            <div className="border padding-20 roundEdgeSmall">
            <InputUi
                type={'file'}
                file
                hint={<TextUi bold text='upload your profile picture' color='dark900' />}
                onChange={handleFileChange}
                button={<UiButton text={'Select Image'} bg='gradient' startIcon={<PiImage />} rounded/> }
              />
            </div>
            </center>
            <SectionUI gap={2}/>
            <UiButton onClick={handleUpload} fullWidth bg={'primary'} raised endIcon={<PiPaperPlane />}>Submit</UiButton>
           
          </div>
        </div>
        </>
      );
}else{
    return ""
}
}
