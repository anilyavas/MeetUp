import Mapbox, { Camera, CircleLayer, LocationPuck, MapView, ShapeSource } from '@rnmapbox/maps';
import { featureCollection, point } from '@turf/helpers';
import { router } from 'expo-router';
import { View } from 'react-native';

import { useNearbyEvents } from '~/hooks/useNearbyEvents';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_TOKEN);

export default function EventsMapView() {
  const events = useNearbyEvents();
  console.log(events);

  const points = events
    .filter((event) => event.long && event.lat)
    .map((event) => point([event.long, event.lat], { event }));

  return (
    <View className="flex-1 bg-red-500">
      <MapView style={{ width: '%100', height: '%100', flex: 1 }}>
        <Camera followZoomLevel={5} followUserLocation />
        <LocationPuck puckBearing="heading" puckBearingEnabled pulsing={{ isEnabled: true }} />
        <ShapeSource
          id="events"
          shape={featureCollection(points)}
          onPress={(event) => router.push(`/event/${event.features[0].properties.event.id}`)}>
          <CircleLayer
            id="events"
            style={{
              circlePitchAlignment: 'map',
              circleColor: '#42E100',
              circleRadius: 20,
              circleOpacity: 1,
              circleStrokeWidth: 2,
              circleStrokeColor: 'white',
            }}
          />
        </ShapeSource>
      </MapView>
    </View>
  );
}
