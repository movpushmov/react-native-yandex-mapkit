import { HostComponent, requireNativeComponent, UIManager } from 'react-native';
import type { NativeMapMarkerProps } from './types';
import { LINKING_ERROR } from '../../const';

const ComponentName = 'YandexMapMarkerView';

export const NativeYandexMapMarker = (
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NativeMapMarkerProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      }
) as HostComponent<NativeMapMarkerProps>;
