import Foundation
import YandexMapsMobile
import React

struct Point: Decodable {
    var lat: Double;
    var lon: Double;
}

enum MarkerError: Error {
    case emptyPoint
    case parseError
}

class MapMarkerView: UIView {
  var _marker: YMKPlacemarkMapObject?
  var _reactSubviews: [UIView] = []
  var _childView: UIView?
  
  @objc var point: NSDictionary?;
  
  func setChildView() {
    if _reactSubviews.count > 0 {
      _childView = _reactSubviews[0]
      
      if let child = _childView {
        if let marker = _marker {
          child.isOpaque = false
          
          let width = child.bounds.width == 0 ? 100 : child.bounds.width
          let height = child.bounds.height == 0 ? 100 : child.bounds.height
          child.frame = CGRect(x: 0, y: 0, width: width, height: height)
          if let provider = YRTViewProvider(uiView: child) {
            marker.setViewWithView(provider)
          }
        }
      }
    }
  }
  
  @objc override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    _reactSubviews.insert(subview, at: atIndex)
    super.insertReactSubview(subview, at: atIndex)
  }
  
  @objc override func removeReactSubview(_ subview: UIView!) {
    if let index = _reactSubviews.firstIndex(of: subview) {
      _reactSubviews.remove(at: index)
    }

    super.removeReactSubview(subview)
  }
  
  @objc override func didUpdateReactSubviews() {
    DispatchQueue.main.async {
      self.setChildView()
    }
  }
  
  @objc func drawMarker(_ manager: MapView) {
      guard let rawPoint = point else {
          return
      }
      
      guard let json = try? JSONSerialization.data(withJSONObject: rawPoint, options: []) else {
          return
      }
      
      guard let markerPoint = try? JSONDecoder().decode(Point.self, from: json) else {
          return
      }
      
      let geometry = YMKPoint(latitude: markerPoint.lat, longitude: markerPoint.lon)
      let placemarkView = YRTViewProvider(uiView: UIView(frame: CGRect(x: 0, y: 0, width: 1, height: 1)))
          
      let objects = manager.ymkMapView.mapWindow.map.mapObjects
      _marker = objects.addPlacemark(with: geometry, view: placemarkView!)
          
      setChildView()
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
}

@objc(YandexMapMarkerManager)
class MapMarkerManager: RCTViewManager {
  var mapMarkerView: MapMarkerView!

  override static func requiresMainQueueSetup() -> Bool {
    false
  }
  
  override func view() -> UIView! {
    mapMarkerView = MapMarkerView()
    
    return mapMarkerView
  }
}

