#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>

@interface MapView: NSObject
@end

@interface RCT_EXTERN_MODULE(YandexMapMarkerManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(point, NSDictionary)

RCT_EXPORT_METHOD(initialize:(nonnull NSNumber*) reactMapMarkerTag : (nonnull NSNumber*)reactMapViewTag) {
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
      
        [mapMarker initialize:mapView];
    }];
}

RCT_EXPORT_METHOD(updateMarker:(nonnull NSNumber*) reactMapMarkerTag) {
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
        YandexMapMarkerManager *mapMarker = viewRegistry[reactMapMarkerTag];
        
        if (!mapMarker) {
            RCTLogError(@"Cannot find NativeView with tag #%@", reactMapMarkerTag);
            return;
        }
      
        [mapMarker updateMarker];
    }];
}

// type declarations for functions from Swift
- (void)initialize:(MapView*)manager {}
- (void)updateMarker {}

@end
