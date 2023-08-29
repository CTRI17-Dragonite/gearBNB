import React, { useState } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
// const dotenv = require('dotenv').config();


const center = { lat: 29.4252, lng: -98.4946};

const Map = (props) => {
  const [ libraries ] = useState(['places']);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCVH_6c7itNHgRJ2WAH9xv-nGedPgMVWBU',
    libraries
  })

  const [map, setMap] = useState(null)

  if(!isLoaded){
    return <div>...Loading</div>
  }

  return (
    <div className='border-2 border-red-500'>Map

        <div className='border-2 border-green-500 justify-right absolute right-0'>
          <GoogleMap
            center={center}
            zoom={9}
            mapContainerStyle={{ width: '860px', height: '500px' }}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true
            }}
            onLoad={map => setMap(map)}
          >
          </GoogleMap>
        </div>
    </div>
  )
}

export default Map