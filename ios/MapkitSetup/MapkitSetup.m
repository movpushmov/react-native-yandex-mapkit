//
//  MapkitSetup.m
//  react-native-yandex-mapkit
//
//  Created by Edward Gigolaev on 20.05.2023.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(YandexMapkitSetupModule, NSObject)

RCT_EXTERN_METHOD(setup:
  (NSString*)apiKey
  locale: (nullable NSString*)locale
)

@end
