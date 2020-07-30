import React from 'react';
import {View, BackHandler} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import Input from 'components/input';
import MainButton from 'components/shared/MainButton';
import SuccessModal from 'components/shared/SuccessModal';
import ChooseSpecialStation from './components/chooseSpecialStation';
import StationsModal from './components/stationsModal';
import {
  StationType,
  NavigationType,
  CarType,
  ReservationResponseType,
} from 'constants/types';
import apis from 'utils/apis';
import {PAYMENT_DATA} from 'constants/fakes';
import styles from './styles';

interface Props {
  navigation: NavigationType;
  route: {
    params: {
      event_id: number;
      price: number;
      dates: Array<string>;
    };
  };
}

interface State {
  cars: Array<CarType>;
  form: {
    first_name: string;
    last_name: string;
    phone_number: string;
    carModel: string;
    manufacturing_year: string;
    stationType: string;
    selectedDedicatedStation: StationType;
  };
  successModalVisibility: boolean;
  stationsModalVisibility: boolean;
  expandedStation: number;
  dedicated_stations: Array<StationType>;
  payment_data: ReservationResponseType;
}

const NORMAL_STATION = 'عادی';

export default class RegisterCar extends React.Component<Props, State> {
  backHandler: any;
  state = {
    cars: [{id: 0, name: '', years: [2000]}],
    form: {
      first_name: '',
      last_name: '',
      phone_number: '',
      carModel: 'سایپا',
      manufacturing_year: '2019',
      stationType: 'عادی',
      selectedDedicatedStation: {
        id: 0,
        name: '',
        characteristics: ['one', 'two'],
        price: 0,
        image: '',
      },
    },
    successModalVisibility: false,
    stationsModalVisibility: false,
    expandedStation: -1,
    dedicated_stations: [],
    payment_data: PAYMENT_DATA,
  };
  async componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      const {stationsModalVisibility, expandedStation} = this.state;
      if (stationsModalVisibility) {
        if (expandedStation !== -1) {
          this.setState({expandedStation: -1});
        } else {
          this._toggleStationsModal();
        }
        return true;
      }
      return false;
    });
    const cars = await apis.getCarModels();
    const dedicated_stations = await apis.getEventDedicatedStations(
      this.props.route.params.event_id,
    );
    this.setState({
      cars,
      dedicated_stations,
      form: {
        ...this.state.form,
        selectedDedicatedStation: dedicated_stations[0],
      },
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  _setExpandedStation = (expandedStation: number) =>
    this.setState({expandedStation});
  _updateForm = (k: string, v: string) => {
    this.setState({form: {...this.state.form, [k]: v}});
  };
  _toggleSuccessModal = () =>
    this.setState({successModalVisibility: !this.state.successModalVisibility});
  _toggleStationsModal = () =>
    this.setState({
      stationsModalVisibility: !this.state.stationsModalVisibility,
    });
  _onReserveStation = () => {
    const {form, dedicated_stations, expandedStation} = this.state;
    this.setState({
      form: {
        ...form,
        selectedDedicatedStation: dedicated_stations[expandedStation],
      },
      expandedStation: -1,
      stationsModalVisibility: false,
    });
  };

  _onSubmitForm = async () => {
    try {
      const {event_id, dates} = this.props.route.params;
      const {
        form: {
          first_name,
          last_name,
          phone_number,
          stationType,
          manufacturing_year,
          selectedDedicatedStation,
        },
      } = this.state;
      const data = {
        event_id,
        dates,
        first_name,
        last_name,
        phone_number,
        vehicle_model_id: 1,
        manufacturing_year: Number(manufacturing_year),
      };
      let res;
      if (stationType === NORMAL_STATION) {
        res = await apis.normalSellStationReserve(data);
      } else {
        res = await apis.dedicatedSellStationReserve({
          ...data,
          dedicated_station_id: selectedDedicatedStation.id,
        });
      }
      this.setState({payment_data: res, successModalVisibility: true});
    } catch (e) {
      console.log('e', e);
    }
  };

  render() {
    const {
      navigation,
      route: {
        params: {price, dates},
      },
    } = this.props;
    const {
      cars,
      successModalVisibility,
      stationsModalVisibility,
      form: {
        first_name,
        last_name,
        phone_number,
        carModel,
        manufacturing_year,
        stationType,
        selectedDedicatedStation,
      },
      expandedStation,
      dedicated_stations,
      payment_data,
    } = this.state;
    return (
      <Header title="ثبت نام" onBackPress={navigation.goBack}>
        <View style={styles.centerContainer}>
          <View style={styles.horizontalInputsContainer}>
            <Input
              title="نام خانوادگی"
              onChange={(v) => this._updateForm('first_name', v)}
              containerStyle={styles.smallInput}
              value={first_name}
            />
            <Input
              title="نام"
              onChange={(v) => this._updateForm('last_name', v)}
              containerStyle={styles.smallInput}
              value={last_name}
            />
          </View>
          <Input
            title="شماره تماس"
            onChange={(v) => this._updateForm('phone_number', v)}
            value={phone_number}
            keyboardType="phone-pad"
            containerStyle={styles.input}
          />
          <View style={styles.horizontalInputsContainer}>
            <Input
              title="سال ساخت"
              onChange={(v) => this._updateForm('manufacturing_year', v)}
              containerStyle={styles.smallInput}
              value={manufacturing_year}
              options={cars[0].years.map((year) => String(year))}
            />
            <Input
              title="نوع خودروی شما"
              onChange={(v) => this._updateForm('carModel', v)}
              containerStyle={styles.smallInput}
              value={carModel}
              options={cars.map(({name}) => name)}
            />
          </View>
          <Input
            title="نوع پارکینگ جهت نمایش"
            onChange={(v) => this._updateForm('stationType', v)}
            value={stationType}
            keyboardType="phone-pad"
            containerStyle={styles.input}
            options={[NORMAL_STATION, 'ویژه']}
          />
          {stationType !== NORMAL_STATION && (
            <ChooseSpecialStation
              onPress={this._toggleStationsModal}
              station={selectedDedicatedStation}
            />
          )}
          <IranYekan style={styles.priceText}>
            مبلغ قابل پرداخت :‌{' '}
            {stationType === NORMAL_STATION
              ? price * dates.length
              : selectedDedicatedStation.price * dates.length}{' '}
            تومان
          </IranYekan>
          <MainButton
            title="پرداخت وجه جهت رزرو پارکینگ"
            onPress={this._onSubmitForm}
            style={styles.submitButton}
          />
        </View>
        <SuccessModal
          visible={successModalVisibility}
          data={{...payment_data, first_name, last_name}}
          onRequestClose={this._toggleSuccessModal}
        />
        <StationsModal
          visible={stationsModalVisibility}
          stations={dedicated_stations}
          onReserveStation={this._onReserveStation}
          onRequestClose={this._toggleStationsModal}
          onStationPress={this._setExpandedStation}
          expandedStation={expandedStation}
        />
      </Header>
    );
  }
}
