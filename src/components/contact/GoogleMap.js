import React from 'react'
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    const defaultProps = {
        center:{
            lat: 8,
            lng: 115
        },
        zoom: 2
    }
    return (
        <div style={{height: "400px", width: "100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom = {defaultProps.zoom}

            ></GoogleMapReact>
            
        </div>
    )
}

export default GoogleMap
