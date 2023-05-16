import { createContext, RefObject, useContext } from 'react';
import type { NativeYandexMapView } from '../MapView/NativeMapView';

export const MapContext = createContext<RefObject<typeof NativeYandexMapView> | null>(
  null
);

export function useMapContext() {
  return useContext(MapContext);
}
