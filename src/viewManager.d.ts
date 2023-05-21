import 'react-native';
import type { Views, ViewConfig } from './types';

declare module 'react-native' {
  export interface UIManagerStatic {
    getViewManagerConfig<T extends Views>(viewName: T): ViewConfig<T>;
  }
}
