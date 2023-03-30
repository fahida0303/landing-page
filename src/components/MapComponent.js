import React, {useEffect, useState} from "react";
// import useSWR from "swr";
 import Map, {Marker} from "react-map-gl";
import {DivMap} from './Map-element'
import 'mapbox-gl/dist/mapbox-gl.css';
// import '../App.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';


mapboxgl.workerClass = MapboxWorker;


function MapView({className}){


  const [lng,setLng]=useState(37.7749295)
  const [lat,setLang]=useState(-122.4194155)
  

    //carga de dastos 
    const [data,setData] = useState([])

    useEffect(() => {
       fetch('https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco')
       .then((res) => res.json())
       .then((data) => {
          setData(data) 
         //console.log(data);
       })
     }, [])

  return(
    <DivMap>
      <h1>mkqefofw</h1>
      <Map
      mapboxAccessToken={process.env.MAPBOX_TOKEN}
      style={{width:"60vw", height:"100vh"}}
      initialViewState={{
        center: [lng, lat]
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      >
           
           {Object.keys(data).sort().map(key => {
      const value = data[key];
      console.log(value);
      value.map(inf =>{
        return(
     <Marker 
     Key={inf.id} 
     latitude={parseFloat(lng)} 
     longitude={parseFloat(lat)}>
      {console.log(inf.location.latitude)}
      <button
            style={{
              backgroundColor: "red",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              display: "block"
            }}
          >
          </button>
     </Marker>
      )})
})}
   
      </Map>
    </DivMap>
  )
}

export default MapView;
