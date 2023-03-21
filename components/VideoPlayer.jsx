import React, { StrictMode, useRef } from 'react';
import {Cloudinary} from '@cloudinary/url-gen';


const cld = new Cloudinary({ 
    cloud: {
      cloudName: 'dmyqvnof3'
    },
    url: {
      secure: true 
    }
  });

; 



function VideoPlayer(title) {
  
  const VIDEO_PATH = cld.video('movies/'+ title.title).toURL().toString();
    return (     
    <video width="320" height="240" controls>
            <source src={VIDEO_PATH} type="video/mp4"/>
    </video>
      
   )
};
export default VideoPlayer;

