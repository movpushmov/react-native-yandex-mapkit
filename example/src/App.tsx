import * as React from 'react';
import {
  setup,
  YandexMapMarker,
  YandexMapView,
} from 'react-native-yandex-mapkit';
import { MAPKIT_KEY, MAPKIT_LOCALE } from '@env';
import { Text, View } from 'react-native';

setup(MAPKIT_KEY, MAPKIT_LOCALE);

export default function App() {
  return (
    <YandexMapView
      style={{ flex: 1 }}
      initialCoords={{
        lat: 55.751574,
        lon: 37.573856,
        zoom: 15,
        azimuth: 0,
        tilt: 0,
      }}
    >
      <YandexMapMarker
        point={{
          lat: 55.751574,
          lon: 37.573856,
        }}
      >
        <View
          style={{
            backgroundColor: 'blue',
            width: 200,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Hello from react native!
          </Text>
        </View>
      </YandexMapMarker>
    </YandexMapView>
  );
}
