import React from 'react';
import {View, ScrollView} from 'react-native';

import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import Input from 'components/input';
import SuccessModal from 'components/common/SuccessModal';
import Calendar from 'components/calendar';
import CalendarCalcualtion from 'components/calendarCalcualtion';
import RegistrationModal from 'components/registrationModal';
import ForOthersModal from 'components/common/ForOthersModal';
import ReserveCoupledButtons from 'components/common/ReserveCoupledButtons';
import ChooseSpecialStation from './components/chooseSpecialStation';
import DedicatedStationsModal from './components/dedicatedStationsModal';
import apis from 'utils/apis';
import {
  NavigationType,
  RouteType,
  OnDatePress,
  CarType,
  StationType,
} from 'constants/types';
import {EMPTY_STATION} from 'constants/fakes';
import styles from './styles';

const NORMAL_STATION = 'عادی';
interface Props {
  navigation: NavigationType;
  route: RouteType;
}
interface State {
  cars: Array<CarType>;
  dedicatedStations: Array<StationType>;
  selectedDates: string[];
  isForOthersModalVisible: boolean;
  isSuccessModalVisible: boolean;
  isRegistrationModalVisible: boolean;
  paymentData: object;
  carModel: string;
  manufacturingYear: string;
  parkingType: string;
  selectedDedicatedStation: number;
  isDedicatedStationsVisible: boolean;
}

export default class RegisterCar extends React.Component<Props, State> {
  state = {
    cars: [{id: 0, name: '', years: [2000]}],
    dedicatedStations: [EMPTY_STATION],
    selectedDates: [],
    isForOthersModalVisible: false,
    isSuccessModalVisible: false,
    isRegistrationModalVisible: false,
    paymentData: {},
    carModel: '',
    manufacturingYear: '',
    parkingType: NORMAL_STATION,
    selectedDedicatedStation: 0,
    isDedicatedStationsVisible: false,
  };

  componentDidMount() {
    this.fetchFormData();
  }

  fetchFormData = async () => {
    try {
      const cars = await apis.getCarModels();
      const dedicatedStations = await apis.getEventDedicatedStations(
        // this.props.route.params.event_id,
        1,
      );
      this.setState({
        cars,
        dedicatedStations,
      });
      console.log('dedicatedStations', dedicatedStations);
      console.log('cars', cars);
    } catch (e) {
      console.log('e', e);
    }
  };

  onDatePress: OnDatePress = (date, isSelected) => {
    const {selectedDates} = this.state;
    this.setState({
      selectedDates: isSelected
        ? [...selectedDates, date]
        : selectedDates.filter((d) => d !== date),
    });
  };

  onChangeDedicatedStation = (i: number) =>
    this.setState({
      selectedDedicatedStation: i,
      isDedicatedStationsVisible: false,
    });

  onSubmit = async () => {
    const {
      route: {
        params: {
          event: {event_id = 1},
        },
      },
    } = this.props;
    const {selectedDates} = this.state;
    try {
      const data = await apis.reserveVisitorParking({
        event_id,
        dates: selectedDates,
        phone_number: 'sdf',
        first_name: 'sd',
        last_name: 'asdf',
      });
      this.setState({
        paymentData: data,
        isSuccessModalVisible: true,
      });
    } catch (e) {
      console.log('e', e);
    }
  };

  render() {
    const [start_date, end_date] = ['1399-05-30', '1399-07-10'];
    const {navigation} = this.props;
    // const {
    //   navigation,
    //   route: {
    //     params: {
    //       event: {event_id, start_date, end_date, visitor_parking_price},
    //     },
    //   },
    // } = this.props;
    const {
      // ...other,
      isSuccessModalVisible,
      paymentData,
      selectedDates,
      manufacturingYear,
      carModel,
      parkingType,
      selectedDedicatedStation,
      cars,
      isDedicatedStationsVisible,
      isRegistrationModalVisible,
      isForOthersModalVisible,
      dedicatedStations,
    } = this.state;
    console.log('dedicatedStations', dedicatedStations);
    return (
      <View style={styles.mainContainer}>
        <Header title="خرید بلیط پارکینگ" onBackPress={navigation.goBack} />
        <ScrollView
          contentContainerStyle={styles.centerContainer}
          nestedScrollEnabled>
          <IranYekan style={styles.title}>انتخاب روزهای موردنظر:</IranYekan>
          <Calendar
            dates={{start_date, end_date}}
            disabledDays={[]}
            onDatePress={this.onDatePress}
          />
          <View style={styles.horizontalInputsContainer}>
            <Input
              title="سال ساخت"
              onChange={(manufacturingYear) =>
                this.setState({manufacturingYear})
              }
              containerStyle={styles.smallInput}
              value={manufacturingYear}
              options={cars[0].years.map((year) => String(year))}
            />
            <Input
              title="نوع خودروی شما"
              onChange={(carModel) => this.setState({carModel})}
              containerStyle={styles.smallInput}
              value={carModel}
              options={cars.map(({name}) => name)}
            />
          </View>
          <Input
            title="نوع پارکینگ جهت نمایش"
            onChange={(parkingType) => this.setState({parkingType})}
            value={parkingType}
            keyboardType="phone-pad"
            containerStyle={styles.input}
            options={[NORMAL_STATION, 'ویژه']}
          />
          {parkingType !== NORMAL_STATION && (
            <ChooseSpecialStation
              onPress={() => this.setState({isDedicatedStationsVisible: true})}
              station={dedicatedStations[selectedDedicatedStation]}
            />
          )}
          <CalendarCalcualtion
            additionalStyles={styles.calendarCalculator}
            numberOfSelectedDates={selectedDates.length}
            price={3000}
          />
          <IranYekan style={styles.title}>پرداخت وجه و رزرو پارکینگ:</IranYekan>
          <ReserveCoupledButtons
            onSubmit={this.onSubmit}
            onForOthersSubmit={() => {}}
          />
        </ScrollView>

        {/* <SuccessModal
          visible={isSuccessModalVisible}
          // data={{
          //   ...paymentData,
          //   firstName,
          //   lastName,
          // }}
          onRequestClose={() => this.setState({isSuccessModalVisible: false})}
        /> */}
        <RegistrationModal
          onSuccess={() => {}}
          onRequestClose={() =>
            this.setState({isRegistrationModalVisible: false})
          }
          visible={isRegistrationModalVisible}
        />
        <ForOthersModal
          onSubmit={() => {}}
          onRequestClose={() => this.setState({isForOthersModalVisible: false})}
          visible={isForOthersModalVisible}
        />
        <DedicatedStationsModal
          visible={isDedicatedStationsVisible}
          onRequestClose={() =>
            this.setState({isDedicatedStationsVisible: false})
          }
          dedicatedStations={dedicatedStations}
          onSelect={this.onChangeDedicatedStation}
        />
      </View>
    );
  }
}
