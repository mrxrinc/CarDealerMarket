import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {FAKE_IMAGE} from 'constants/fakes';
import {AppContext} from './context';
import actionTypes from 'constants/actionTypes';
import {
  EventType,
  CityType,
  ReservationResponseType,
  StationType,
  CarType,
  ServiceType,
  ServiceStationType,
  ActionType,
} from 'constants/types';
import {Dispatch} from 'react';

const _getJWT = () => AsyncStorage.getItem('jwt');

const instance = axios.create({
  baseURL: 'http://46.209.114.30:9091/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

type ReservationBaseInfo = {
  event_id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  dates: Array<string>;
};

type SellStationReserve = ReservationBaseInfo & {
  manufacturing_year: number;
  vehicle_model_id: number;
};

type DedicatedSellStationReserve = SellStationReserve & {
  dedicated_station_id: number;
};

type serviceProviderReserve = ReservationBaseInfo & {
  service_id: number;
};

type Login = {
  phoneNumber: string;
  password: string;
};

const payReservation = async (id: number): Promise<ReservationResponseType> => {
  const {data} = await instance.get(`payment/${id}/pay`);
  return {
    tracking_code: data.data.tracking_code,
    ticket_type: data.data.reservation.type,
    marketplace: data.data.marketplace.name,
  };
};

export default {
  getCitiesAndRandomEvents: async () => {
    const response = await Promise.all([
      instance.get('cities/marketplaces'),
      instance.get('events/random/3'),
    ]);
    return {
      cities: response[0].data.data.map((city: CityType) => {
        city.marketplaces = city.marketplaces.map((marketplace) => {
          marketplace.image = FAKE_IMAGE;
          return marketplace;
        });
        return city;
      }),
      randomEvents: response[1].data.data.map((event: EventType) => {
        event.image = FAKE_IMAGE;
        return event;
      }),
    };
  },
  getMarketplaceEvents: async (id: number) => {
    const response = await instance.get(`marketplaces/${id}/events`);
    return response.data.data.map((event: EventType) => {
      event.image = FAKE_IMAGE;
      return event;
    });
  },
  getEventDedicatedStations: async (id: number) => {
    const response = await instance.get(`events/${id}/dedicated-stations`);
    return response.data.data.map((station: StationType) => {
      station.image = FAKE_IMAGE;
      return station;
    });
  },
  getCarModels: async (): Promise<Array<CarType>> => {
    const response = await instance.get('vehicle-models');
    return response.data.data;
  },
  getServiceTypes: async (): Promise<Array<ServiceType>> => {
    const response = await instance.get('events/1/service-types');
    return response.data.data.map((service: ServiceType) => {
      service.services = service.services.map((s: ServiceStationType) => {
        s.image = FAKE_IMAGE;
        return s;
      });
      return service;
    });
  },
  serviceProviderReserve: async (data: serviceProviderReserve) => {
    const response = await instance.post('reservation/service', data);
    return payReservation(response.data.data.id);
  },
  normalSellStationReserve: async (data: SellStationReserve) => {
    const response = await instance.post('reservation/normal-station', data);
    return payReservation(response.data.data.id);
  },
  dedicatedSellStationReserve: async (data: DedicatedSellStationReserve) => {
    const response = await instance.post('reservation/dedicated-station', data);
    return payReservation(response.data.data.id);
  },
  reserveVisitorParking: async (data: ReservationBaseInfo) => {
    const response = await instance.post('reservation/visitor-parking', data);
    return payReservation(response.data.data.id);
  },
  requestVerificationCode: async (phoneNumber: string) => {
    return true;
  },
  verifyVerificationCode: async (phoneNumber: string) => {
    return true;
  },
  login: (data: Login) =>
    instance.post('auth/login', {
      suptel: data.phoneNumber,
      password: data.password,
    }),
  getCurrentUser: async (dispatch: Dispatch<ActionType>) => {
    const Authorization = await _getJWT();
    const res = await instance({
      url: 'auth/me',
      method: 'get',
      headers: {
        Authorization,
      },
    });
    const user = res.data.data;
    console.log('user', user);
    dispatch({
      type: actionTypes.SET_USER,
      payload: {
        id: user.id,
        firstName: user.supname,
        lastName: user.supfamily,
        phoneNumber: user.suptel,
        email: user.supemail,
      },
    });
    return user;
  },
};
