export interface Point {
  lat: number;
  lon: number;
}

export interface CameraPoint extends Point {
  /** Уровень приближения камеры */
  zoom: number;
  /** Наклон карты */
  tilt?: number;
  /** Азимут карты */
  azimuth?: number;
}

/** То же самое, что и CameraPoint, но tilt/azimuth гарантированно указаны */
export interface MapCameraPoint extends Point {
  /** Уровень приближения камеры */
  zoom: number;
  /** Наклон карты */
  tilt: number;
  /** Азимут карты */
  azimuth: number;
}

export interface AnimationProps {
  /** Длительность анимации (значение 0 - переход без анимации) */
  duration: number;
  /** Тип анимации */
  type: Animation;
}

/** Регион карты */
export interface Region {
  topLeft: Point;
  topRight: Point;

  bottomLeft: Point;
  bottomRight: Point;
}

export enum Animation {
  Smooth,
  Linear,
}
