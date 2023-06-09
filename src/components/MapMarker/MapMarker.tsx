import React, { MutableRefObject, useEffect, useRef } from 'react';
import type {
  MapMarkerProps,
  MapMarkerRef,
  MarkerCommands,
  NativeMapMarkerProps,
} from './types';
import { NativeYandexMapMarker } from './NativeMapMarker';
import { useMapContext } from '../utils/mapContext';
import { findNodeHandle, StyleSheet, UIManager } from 'react-native';
import type { NativeRef } from '../../types';

export const YandexMapMarker = React.forwardRef<MapMarkerRef, MapMarkerProps>(
  (props, ref) => {
    const markerRef = useRef<NativeRef<NativeMapMarkerProps>>(null);
    const context = useMapContext();

    function callNativeMethod(method: MarkerCommands, args?: any[]) {
      const methodHandle =
        UIManager.getViewManagerConfig('YandexMapMarker').Commands[method]!;

      if (markerRef?.current && methodHandle !== undefined) {
        const markerHandle = findNodeHandle(markerRef?.current);
        UIManager.dispatchViewManagerCommand(markerHandle, methodHandle, args);
      }
    }

    useEffect(() => {
      if (context?.current) {
        const mapHandle = findNodeHandle(context.current);
        callNativeMethod('initialize', [mapHandle]);

        if (ref) {
          (ref as MutableRefObject<MapMarkerRef>).current = {};
        }

        return () => {};
      }

      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      setTimeout(() => callNativeMethod('updateMarker'));
    }, [props.children]);

    return (
      <NativeYandexMapMarker style={styles.marker} ref={markerRef} {...props} />
    );
  }
);

const styles = StyleSheet.create({
  marker: {
    width: 0,
    height: 0,
  },
});
