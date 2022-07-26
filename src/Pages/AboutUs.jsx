import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const AboutUs = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyABLpk45CYus8GYxVTxFqotFJPQBVeHr-g",
  })
  return (
    <>
    <div>
      <h3 className='text-uppercase'>Información de tiendas</h3>
      <p>Si compraste en una de nuestras tiendas físicas y necesitas contactarte con Servicio al Cliente, escríbenos a <span className='text-uppercase'>customerservice.pe@goods.com</span> </p>
    </div>
    <div style={styles.map}>
    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '70%', height: '80%'}}
        center={{
          lat: -12.068830,
          lng: -76.973597,
        }}
        zoom={10}
      ></GoogleMap>
  ) : (<></>
  )}
  </div>
  </>
  );
};


export default AboutUs

const styles = {
  map: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',

  }
}