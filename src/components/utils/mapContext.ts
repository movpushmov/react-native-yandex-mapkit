import { createContext, RefObject, useContext } from 'react';
import type { NativeRef } from '../../types';
import type { NativeMapViewProps } from '../MapView/types';

export const MapContext = createContext<RefObject<
  NativeRef<NativeMapViewProps>
> | null>(null);

export function useMapContext() {
  return useContext(MapContext);
}
