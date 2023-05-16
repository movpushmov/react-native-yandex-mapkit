import React, { useEffect, useRef } from 'react';
import type { MapMarkerProps } from './types';
import { NativeYandexMapMarker } from './NativeMapMarker';
import { useMapContext } from '../utils/mapContext';
import { findNodeHandle, UIManager } from 'react-native';

export const MapMarker: React.FC<MapMarkerProps> = (props) => {
  const markerRef = useRef<typeof NativeYandexMapMarker>(null);
  const context = useMapContext();

  function callNative(mapHandle?: number, markerHandle?: number) {
    UIManager
  }

  useEffect(() => {
    if (context?.current) {
      const mapHandle = findNodeHandle(context.current);
      const markerHandle = findNodeHandle(markerRef.current);

      UIManager.getViewManagerConfig('MarkerView').Commands.drawMa;

      return () => {};
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <NativeYandexMapMarker ref={markerRef} {...props} />;
};
