import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResult }) => {
    const [selectedLocation, setSelectedLocation] = useState({})
    const coordinates = searchResult.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    })

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/viktrix/cl1f0nk9g003s15qs973q9lln'
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCES_KEY}
            initialViewState={viewport}
            onMove={nextViewPort => setViewport(nextViewPort.viewState)}
        >
            {searchResult.map((result, index) => (
                <div key={index}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offset={[-10, -20]}
                    >
                        <p className='cursor-pointer text-2xl animate-bounce' aria-label='push-pin' role='img' onClick={() => setSelectedLocation(result)}>
                            📌
                        </p>
                    </Marker>

                    {selectedLocation.long === result.long && (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            latitude={result.lat}
                            longitude={result.long}
                            closeOnClick={true}
                        >
                            {result.title}
                        </Popup>
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map