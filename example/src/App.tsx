import * as React from 'react';
import {
  setup,
  YandexMapMarker,
  YandexMapView,
} from 'react-native-yandex-mapkit';
import { MAPKIT_KEY, MAPKIT_LOCALE } from '@env';
import { StyleSheet, Text } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

setup(MAPKIT_KEY, MAPKIT_LOCALE);

export default function App() {
  const scale = useSharedValue(1);

  const testStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scale.value }],
    }),
    [scale.value]
  );

  useEffect(() => {
    scale.value = withRepeat(withTiming(1.2, { duration: 200 }), -1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Animated.View style={[styles.container, testStyle]}>
          <Text style={styles.text}>Hello from RN & Yandex Mapkit!</Text>
        </Animated.View>
      </YandexMapMarker>
    </YandexMapView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 150,
    height: 100,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    textAlign: 'center',
  },
});
