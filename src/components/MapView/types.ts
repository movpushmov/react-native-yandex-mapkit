import type { CameraPoint, Point } from '../../types';
import type { ViewStyle } from 'react-native';
import type { MapStyle } from './mapStyle.types';
import type { ReactElement, RefObject } from 'react';
import type { MapMarkerProps } from '../MapMarker/types';
import type { AnimationProps, MapCameraPoint, Region } from '../../types';

export interface NativeMapViewProps {
  initialCoords?: Point & {
    zoom: number;
    tilt?: number;
    azimuth?: number;
  };

  interactive?: boolean;
  nightMode?: boolean;

  scrollGesturesEnabled?: boolean;
  zoomGesturesEnabled?: boolean;
  tiltGesturesEnabled?: boolean;
  rotateGesturesEnabled?: boolean;

  fastTapEnabled?: boolean;
  maxFps?: number;

  // TO DO user icon & location
  showUserPosition?: boolean;
  followUser?: boolean;
  userLocationIcon?: boolean;
  userLocationIconScale?: number;

  mapStyle?: string;
  style?: ViewStyle;
}

export interface MapViewProps {
  initialCoords?: CameraPoint;

  interactive?: boolean;
  nightMode?: boolean;

  scrollGesturesEnabled?: boolean;
  zoomGesturesEnabled?: boolean;
  tiltGesturesEnabled?: boolean;
  rotateGesturesEnabled?: boolean;

  fastTapEnabled?: boolean;
  maxFps?: number;

  // TO DO user icon & location
  showUserPosition?: boolean;
  followUser?: boolean;
  userLocationIcon?: boolean;
  userLocationIconScale?: number;

  mapStyle?: MapStyle[];
  style?: ViewStyle;

  children?: ReactElement<MapMarkerProps> | ReactElement<MapMarkerProps>[];
  ref?: RefObject<MapViewRef>;
}

export interface MapViewRef {
  /**
   * Получить текущее положение камеры карты
   * @returns {Promise<MapCameraPoint>}
   */
  getCameraPosition(): Promise<MapCameraPoint>;

  /**
   * Получить текущий видимый регион
   * @returns {Promise<Region>}
   */
  getVisibleRegion(): Promise<Region>;

  /**
   * Подобрать положение камеры, чтобы вместить указанные маркеры (если возможно)
   * @param points {Point[]} Позиции маркеров на карте
   */
  fitMarkers(points: Point[]): Promise<void>;

  /**
   * Подобрать положение камеры, чтобы вместить все маркеры (если возможно)
   */
  fitAllMarkers(): Promise<void>;

  /**
   * Переместить камеру в заданную точку
   * @param point {CameraPoint} - точка камеры
   * @param animation {AnimationProps} - анимация
   */
  moveCamera(point: CameraPoint, animation: AnimationProps): Promise<void>;

  /**
   * Изменить текущий zoom карты
   * @param zoom {number} - уровень приближения
   * @param animation {AnimationProps} - анимация
   */
  changeZoom(zoom: number, animation: AnimationProps): Promise<void>;
}
