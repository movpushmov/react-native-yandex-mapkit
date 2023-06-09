/**
 * Ниже перечислены теги дорог, с помощью которых можно менять подложку карты.
 * @readonly
 * @enum {string}
 */
export enum MapStyleRoadTags {
  /** Автомобильные дороги */
  Road = 'road',

  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road1 = 'road_1',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road2 = 'road_2',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road3 = 'road_3',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road4 = 'road_4',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road5 = 'road_5',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road6 = 'road_6',
  /** Автомобильные дороги важности N, где N — значение от 1 (наиболее важные) до 7 (наименее важные) */
  Road7 = 'road_7',

  /** Дороги с ограничением движения автомобильного транспорта, пешеходные зоны */
  RoadLimited = 'road_limited',
  /** Неклассифицированные дороги, как правило — лесные и полевые */
  RoadUnclassified = 'road_unclassified',
  /** Внутриквартальные проезды */
  RoadMinor = 'road_minor',
  /** Строящиеся дороги */
  RoadConstruction = 'road_construction',
  /** Дороги, непригодные для проезда автомобилей (тротуары, дорожки в парках и на кладбищах, велодорожки) */
  Path = 'path',
  /** Пешеходные и велосипедные переходы */
  Crosswalk = 'crosswalk',
  /** Светофоры */
  TrafficLight = 'traffic_light',
}

/**
 * Ниже перечислены теги дорог, с помощью которых можно менять подложку карты.
 * @readonly
 * @enum {string}
 */
export enum MapStyleWaterTags {
  /** Водные объекты */
  Water = 'water',
  /** Карта глубин водоемов */
  Bathymetry = 'bathymetry',
}

/*

landscape — наземные объекты:
land — земная поверхность;
landcover — растительность, болота, ледники:
vegetation — растительноcть, включая газоны и внутриквартальную растительность.
urban_area — кварталы:
residential — жилые кварталы;
industrial — промышленные кварталы;
cemetery — территории кладбищ;
park — сады, парки;
medical — территории медицинских учреждений;
sports_ground — спортивные площадки и игровые поля;
beach — территории пляжей;
construction_site — строительные площадки.
national_park — национальные парки и заповедники;
terrain — рельеф.
poi — точки интереса:
major_landmark — хорошо заметные объекты, отмеченные отдельной иконкой;
outdoor — площадки на открытом воздухе:
park — сады, парки;
beach — пляжи.
shopping — магазины, торговые центры;
commercial_services — организации, предоставляющие коммерческие услуги;
food_and_drink — рестораны, бары;
cemetery — кладбища;
medical — медицинские учреждения.
admin — подписи и границы административно-территориальных делений, полигоны населенных пунктов:
country — страны;
region — области или штаты;
locality — населенные пункты;
district — городские районы;
address — адресные точки.
transit — все объекты карты, связанные с общественным транспортом:
transit_location — все точки на карте, связанные с общественным транспортом (станции метро, остановки, входы):
transit_stop — остановки наземного общественного транспорта, где выполняется посадка и высадка пассажиров;
transit_entrance — физические входы на станцию метро или выходы из нее.
transit_line — линии транспорта как физический объект (железнодорожные и трамвайные пути, кабельные линии на поверхности);
transit_schema — схематическое изображение линий общественного транспорта;
is_unclassified_transit — объекты общественного транспорта, важность которых неизвестна.
structure — структуры:
building — здания:
entrance — входы в здания.
fence — заборы.
is_tunnel — участок дороги или пути проходит в тоннеле.
 */

type MapTags = MapStyleRoadTags | MapStyleWaterTags;

export interface MapStyle {
  tags?: {
    all: MapTags[];
    any: MapTags[];
    none: MapTags[];
  };
}

// TO DO
