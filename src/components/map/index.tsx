import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Libraries, Marker, useLoadScript } from '@react-google-maps/api';
import Loader from '../loader';
import mapStyles from './styles'
import styles from './styles.module.scss'
import { Location } from '../../modules/locations/typings';
import makeKeyFromLocation from '../../modules/locations/utils/cache';
import Locate from './locate';

const center = {
    lat: -3.745,
    lng: -38.523
};

const libraries: Libraries = ['places'];

const options: google.maps.MapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

interface CustomMapProps {
    addMarker: (marker: Location) => void;
    markers: Array<Location>
}

const CustomMap = ({ markers, addMarker }: CustomMapProps) => {
    const mapsRef = useRef<google.maps.Map | null>(null);
    const { isLoaded, loadError } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        libraries
    })

    const onLoad = useCallback((map: google.maps.Map) => {
        mapsRef.current = map;
    }, []);

    const onUnload = useCallback((map: google.maps.Map) => {
        mapsRef.current = null;
    }, []);

    const handleOnMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (!addMarker) return;

        const latitude = e.latLng?.lat();
        const longitude = e.latLng?.lng();

        if (!latitude || !longitude) return;

        addMarker({
            lan: latitude,
            lon: longitude
        })
    }, [])

    const panTo: google.maps.Map['panTo'] = useCallback((data) => {
        if (mapsRef.current) {
            mapsRef.current.panTo(data)
        }
    }, [])

    if (loadError) {
        return <div className={styles.mapContainer}>
            <p>Error: {loadError.message}</p>
        </div>
    }

    if (!isLoaded) {
        return <div className={styles.mapContainer}>
            <Loader text='Loading maps...' />
        </div>
    }

    return (
        <div className={styles.mapContainer}>
            <Locate panMapTo={panTo} />
            <GoogleMap
                mapContainerClassName={styles.map}
                center={center}
                zoom={8}
                options={options}
                onClick={handleOnMapClick}
                onLoad={onLoad}
                onUnmount={onUnload}
            >
                {markers?.map((marker) => (
                    <Marker
                        key={makeKeyFromLocation(marker)}
                        position={{
                            lat: marker.lan,
                            lng: marker.lon
                        }}
                        icon={{
                            url: "/marker.svg",
                            ...(window.google && { scaledSize: new window.google.maps.Size(28, 28) })
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}

export default CustomMap;