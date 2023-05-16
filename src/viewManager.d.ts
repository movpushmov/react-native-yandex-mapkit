declare module 'react-native' {
  type ViewCommands<T extends string, U extends string> = {
    [p: T]: {
      Commands: {
        [P in U]: number;
      };
    };
  };

  type ViewNameToCommands = ViewCommands<'MapView'> &
    ViewCommands<'MapMarker', 'drawMarker' | 'destroyMarker'>;

  type ViewConfig<T extends string> = ViewNameToCommands[T] extends object
    ? ViewNameToCommands[T]
    : { Commands: { [p: string]: number } };

  interface UIManagerStatic {
    getViewManagerConfig<T extends string>(viewName: T): ViewConfig<T>;
  }
}
