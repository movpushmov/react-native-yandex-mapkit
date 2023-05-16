import type { Point } from '../../types';
import type { ReactNode, RefObject } from 'react';

export interface NativeMapMarkerProps {
  point: Point;

  scale?: number;
  zIndex?: number;

  visible?: boolean;

  onPress?: () => void;
  children?: ReactNode;
}

export interface MapMarkerProps extends NativeMapMarkerProps {
  ref?: RefObject<NativeMapMarkerRef>;
}

export interface NativeMapMarkerRef {}
