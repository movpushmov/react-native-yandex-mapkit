import type { Point, ViewNameToCommands } from '../../types';
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface NativeMapMarkerProps {
  point: Point;

  scale?: number;
  zIndex?: number;

  visible?: boolean;

  onPress?: () => void;
  children?: ReactNode;

  style?: ViewStyle;
}

export interface MapMarkerProps extends NativeMapMarkerProps {}

export interface MapMarkerRef {}

export type MarkerCommands = keyof ViewNameToCommands['MapMarker']['Commands'];
