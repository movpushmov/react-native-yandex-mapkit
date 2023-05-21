import Foundation
import React
import YandexMapsMobile

struct InitialCoords: Decodable {
  var lat: Double;
  var lon: Double;
  
  var zoom: Float;
  var azimuth: Float = 0;
  var tilt: Float = 0;
}

func isSimulator() -> Bool {
  #if targetEnvironment(simulator)
    return true
  #else
    return false
  #endif
}

@objcMembers class MapView: UIView {
    var ymkMapView: YMKMapView
    
    func setInitialCoords(_ initialCoords: NSDictionary) {
        if let json = try? JSONSerialization.data(withJSONObject: initialCoords, options: []) {
          if let coords: InitialCoords = try? JSONDecoder().decode(InitialCoords.self, from: json) {
            let cameraPoint = YMKPoint(latitude: coords.lat, longitude: coords.lon)
            let cameraPosition = YMKCameraPosition(target: cameraPoint, zoom: coords.zoom, azimuth: coords.azimuth, tilt: coords.tilt)
        
            ymkMapView.mapWindow.map.move(with: cameraPosition, animationType: YMKAnimation(type: YMKAnimationType.linear, duration: 0), cameraCallback: nil)
          }
        }
    }

    override init(frame: CGRect) {
      ymkMapView = YMKMapView(frame: CGRect.zero, vulkanPreferred: isSimulator())
      super.init(frame: frame)
        
      clipsToBounds = true
      addSubview(ymkMapView)
    }
       
    required init?(coder aDecoder: NSCoder) {
      ymkMapView = YMKMapView(frame: CGRect.zero, vulkanPreferred: isSimulator())
      super.init(coder: aDecoder)
        
      clipsToBounds = true
      addSubview(ymkMapView)
    }
}

@objc(YandexMapViewManager)
class MapViewManager: RCTViewManager {
    override static func requiresMainQueueSetup() -> Bool {
        true
    }
  
    override func view() -> UIView! {
        return MapView()
    }
}
