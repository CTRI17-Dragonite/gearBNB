import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import GeoCoder from 'google-geocoder';
// const dotenv = require('dotenv').config();
// const Dotenv = require('dotenv-webpack').config();
// import Dotenv from 'dotenv-webpack'
// Dotenv;


const Map = (props) => {
  const [center, setCenter] = useState({ lat: 29.4252, lng: -98.4946});
  const [zipCode, setZipCode] = useState('78015')

  const ApiKey =
  const geo = GeoCoder({
    key: ApiKey
  })

  const handleZipChange = (e) => {
    e.preventDefault();
    geo.find(zipCode, (err, res) => {
      console.log('res: ', res)
      const lat = res[0].location.lat;
      const lng = res[0].location.lng;
      setCenter({ lat: lat, lng: lng })
      console.log('center: ', center)
    })
  }

  const [ libraries ] = useState(['places']);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: ApiKey,
    libraries
  })

  const handleChangeZipClick = (e) => {
    e.preventDefault();
    console.log('zipCode: ', zipCode)
    handleZipChange(e)
  }


  const [map, setMap] = useState(null)

  if(!isLoaded){
    return <div>...Loading</div>
  }

  // useEffect(() => {
  //   console.log('test')
  //   const func = (map) => {
  //     setMap(map)
  //   }
  //   func();
  // }, [center])

  return (
    <div className='flex justify-center border-2 border-red-500'>Map
      {/* <button className="absolute bottom-0 left-0" onClick={handleZipChange}>Update zip</button> */}
      <div className='absolute left-0'>
        <form>
          <label>New Zip Code</label>
          <input className='border-2' onChange={(e) => setZipCode(e.target.value)}>
          </input>
          <button onClick={handleChangeZipClick}>GO</button>
        </form>
      </div>
      <div className='flex border-2 border-green-500 justify-center absolute right-0'>
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