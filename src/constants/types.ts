import {StackNavigationProp} from '@react-navigation/stack';

export type EventType = {
  id: number;
  name: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string;
  visitor_parking_price: number;
  queue_station_price: number;
};

export type StationType = {
  id: number;
  name: string;
  price: number;
  characteristics: Array<string>;
  image: string;
};

export type ServiceStationType = {
  id: number;
  name: string;
  price: number;
  characteristics: string[];
  image: string;
};

export type ServiceType = {
  id: number;
  name: string;
  services: Array<ServiceStationType>;
};

export type CarType = {
  id: number;
  name: string;
  years: Array<number>;
};

export type ActionType = {
  type: string;
  payload?: any;
};

export type MarketplaceType = {
  id: number;
  name: string;
  address: string;
  description: string;
  latitude: string;
  longitude: string;
  is_in_door: number;
  number_of_storeys: number;
  province_id: number;
  city_id: number;
  code: string;
  total_area: string;
  shape: string;
  created_at: string;
  updated_at: string;
  image: string;
};

export type CityType = {
  id: string;
  name: string;
  marketplaces: Array<MarketplaceType>;
};

export type NavigationType = StackNavigationProp<any, any>;
export type RouteType = {params: {[key: string]: any}};

export type ReservationResponseType = {
  tracking_code: string;
  ticket_type: string;
  marketplace: string;
};

export type TicketDataType = ReservationResponseType & {
  first_name: string;
  last_name: string;
};

export type KeyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad';
