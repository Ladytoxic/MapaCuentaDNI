import './Maps.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getCurrentPosition } from '../../geolocalization';

import L from 'leaflet'

import fetchData from '../../api';

const Maps = () => {
  const [maps, setMaps] = useState([])
  const [position, setPosition] = useState(null);


  const customIcon = L.icon({
    iconUrl: 'localizacion.png',
    iconSize: [25, 37],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]

  });

  useEffect(() => {
    fetchData()
      .then(data => {
        setMaps(data);
      })
      .catch(error => {
        console.error('Hubo un error al realizar la solicitud:', error);
      });

    getCurrentPosition()
      .then((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        console.log(position);
      })
      .catch((error) => {
        console.error("Error al obtener la geolocalización:", error);
      });
  }, []);

  return (
    <div className='mapsView'>
      {position ? (
        <MapContainer center={position} zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {maps.length > 0 ? (
            maps?.map((shop) => (
              (shop.latitud && shop.longitud) ? (
                <Marker key={shop.id} position={[shop.latitud, shop.longitud]} title={shop.empresa} icon={customIcon}>
                  <Popup>
                    <h4>{shop.empresa}</h4>
                    <span>{shop.rubro}</span>
                    <p>{shop.direccion}</p>
                    <a target="_blank" href={`https://www.google.com/maps/place/${shop.direccion.replace(/ /g, '+')}+${shop.localidad.replace(/ /g, '+')},+Provincia+de+Buenos+Aires/@${shop.latitud},${shop.longitud}`}>Ver como llegar</a>
                  </Popup>
                </Marker>
              ) : null
            ))
          ) : (
            <p>Error</p>
          )}
        </MapContainer>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}

    </div >
  )
}

export default Maps;