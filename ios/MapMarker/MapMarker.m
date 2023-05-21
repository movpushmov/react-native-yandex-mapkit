#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

@interface MapView: NSObject
@end

@interface RCT_EXTERN_MODULE(YandexMapMarkerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(point, NSDictionary)

RCT_EXPORT_METHOD(drawMarker:(nonnull NSNumber*) reactMapMarkerTag : (nonnull NSNumber*)reactMapViewTag) {
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
        MapView *mapView = viewRegistry[reactMapViewTag];
        YandexMapMarkerManager *mapMarker = viewRegistry[reactMapMarkerTag];
      
        if (!mapView) {
            RCTLogError(@"Cannot find NativeView with tag #%@", reactMapViewTag);
            return;
        }
      
        if (!mapMarker) {
            RCTLogError(@"Cannot find NativeView with tag #%@", reactMapMarkerTag);
            return;
        }
      
        [mapMarker drawMarker:mapView];
    }];
}

// type declarations for functions from Swift
- (void)drawMarker:(MapView*)manager {}

@end
