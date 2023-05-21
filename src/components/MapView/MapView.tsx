import React, { useEffect, useRef } from 'react';
import type { MapViewProps, MapViewRef, NativeMapViewProps } from './types';
import { NativeYandexMapView } from './NativeMapView';
import type {
  AnimationProps,
  CameraPoint,
  MapCameraPoint,
  NativeRef,
  Point,
  Region,
} from '../../types';
import { MapContext } from '../utils/mapContext';

export const YandexMapView = React.forwardRef<MapViewRef, MapViewProps>(
  ({ mapStyle, children, ...otherProps }, ref) => {
    const mapRef = useRef<NativeRef<NativeMapViewProps>>(null);

    /*
      События, которые предстоит реализовать (из геокодера)

      findRoutes(points: Point[], vehicles: Vehicles[], callback: (event: RoutesFoundEvent) => void) - запрос маршрутов через точки points с использованием транспорта vehicles. При получении маршрутов будет вызван callback с информацией обо всех маршрутах (подробнее в разделе "Запрос маршрутов");
      findMasstransitRoutes(points: Point[], callback: (event: RoutesFoundEvent<MasstransitInfo>) => void): void - запрос маршрутов на любом общественном транспорте;
      findPedestrianRoutes(points: Point[], callback: (event: RoutesFoundEvent<MasstransitInfo>) => void): void - запрос пешеходного маршрута;
      findDrivingRoutes(points: Point[], callback: (event: RoutesFoundEvent<DrivingInfo>) => void): void - запрос маршрута для автомобиля;
      setTrafficVisible(isVisible: boolean): void - включить/отключить отображение слоя с пробками на картах;

      Не геокодер, но и не самые важные функции

      getScreenPoints(point: Point[], callback: (screenPoints: ScreenPoint[]) => void) - получить кооординаты на экране (x и y) по координатам маркеров;
      getWorldPoints(screenPoint: ScreenPoint[], callback: (worldPoints: Point[]) => void) - получить координаты точек (lat и lon) по координатам на экране.
     */

    /**
     * Получить текущее положение камеры карты
     * @returns {Promise<MapCameraPoint>}
     */
    async function getCameraPosition(): Promise<MapCameraPoint> {
      throw new Error("Don't implemented");
    }

    /**
     * Получить текущий видимый регион
     * @returns {Promise<Region>}
     */
    async function getVisibleRegion(): Promise<Region> {
      throw new Error("Don't implemented");
    }

    /**
     * Подобрать положение камеры, чтобы вместить указанные маркеры (если возможно)
     * @param points {Point[]} Позиции маркеров на карте
     */
    async function fitMarkers(points: Point[]) {
      console.log(points);
      throw new Error("Don't implemented");
    }

    /**
     * Подобрать положение камеры, чтобы вместить все маркеры (если возможно)
     */
    async function fitAllMarkers() {
      throw new Error("Don't implemented");
    }

    /**
     * Переместить камеру в заданную точку
     * @param point {CameraPoint} - точка камеры
     * @param animation {AnimationProps} - анимация
     */
    async function moveCamera(point: CameraPoint, animation: AnimationProps) {
      console.log(point, animation);
      throw new Error("Don't implemented");
    }

    /**
     * Изменить текущий zoom карты
     * @param zoom {number} - уровень приближения
     * @param animation {AnimationProps} - анимация
     */
    async function changeZoom(zoom: number, animation: AnimationProps) {
      console.log(zoom, animation);
      throw new Error("Don't implemented");
    }

    useEffect(() => {
      if (ref) {
        (ref as React.MutableRefObject<MapViewRef>).current = {
          getCameraPosition: getCameraPosition.bind(this),
          getVisibleRegion: getVisibleRegion.bind(this),
          fitMarkers: fitMarkers.bind(this),
          fitAllMarkers: fitAllMarkers.bind(this),
          changeZoom: changeZoom.bind(this),
          moveCamera: moveCamera.bind(this),
        };
      }
    }, [ref]);

    return (
      <MapContext.Provider value={mapRef}>
        <NativeYandexMapView
          {...otherProps}
          ref={mapRef}
          mapStyle={mapStyle ? JSON.stringify(mapStyle) : undefined}
        />

        {children}
      </MapContext.Provider>
    );
  }
);
