import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { YandexMapkitView } from 'react-native-yandex-mapkit';

export default function App() {
  return (
    <View style={styles.container}>
      <YandexMapkitView color="#32a852" style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
