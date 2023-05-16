import { HostComponent, requireNativeComponent, UIManager } from 'react-native';
import type { NativeMapViewProps } from './types';
import { LINKING_ERROR } from '../../const';

const ComponentName = 'YandexMapView';

export const NativeYandexMapView = (
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NativeMapViewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      }
) as HostComponent<NativeMapViewProps>;
