//
//  MapkitSetup.swift
//  react-native-yandex-mapkit
//
//  Created by Edward Gigolaev on 20.05.2023.
//

import Foundation
import YandexMapsMobile

var isSetuped = false;

@objc(YandexMapkitSetupModule)
class MapkitSetupModule: NSObject {
    @objc static func requiresMainQueueSetup() -> Bool {
        true
    }
    
    @objc func setup(_ apiKey: String, locale locale: String?) {
        if !isSetuped {
            DispatchQueue.main.sync {
                YMKMapKit.setApiKey(apiKey)
                
                if locale != nil {
                    YMKMapKit.setLocale(locale)
                }
                
                YMKMapKit.sharedInstance().onStart()
                
                isSetuped = true
            }
        }
    }
}
