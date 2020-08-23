import React from 'react';
import {View, ScrollView} from 'react-native';

import IranYekan from 'components/common/IranYekan';
import Header from 'components/common/Header';
import Input from 'components/input';
import MainButton from 'components/common/MainButton';
import SuccessModal from 'components/common/SuccessModal';
import apis from 'utils/apis';
import {
  NavigationType,
  RouteType,
  ReservationResponseType,
  OnDatePress,
} from 'constants/types';
import styles from './styles';
import Calendar from 'components/calendar';
import CalendarCalcualtion from 'components/calendarCalcualtion';
import CoupledButtons from 'components/coupledButtons';
import RegistrationModal from 'components/registrationModal';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}

interface State {
  selectedDates: string[];
  forOthers: boolean;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isSuccessModalVisible: boolean;
  paymentData: object;
}

export default class BuyParkingTick extends React.Component<Props, State> {
  state = {
    selectedDates: [],
    isBuyForOthersModalVisible: false,
    otherPerson: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    isSuccessModalVisible: false,
    paymentData: {},
  };

  onDatePress: OnDatePress = (date, isSelected) => {
    const {selectedDates} = this.state;
    this.setState({
      selectedDates: isSelected
        ? [...selectedDates, date]
        : selectedDates.filter((d) => d !== date),
    });
  };
  onSubmit = () => {};

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
    } = this.state;

    const buttons = [
      {
        title: 'برای شخص دیگر',
        onPress: () => this.setState({isBuyForOthersModalVisible: true}),
      },
      {
        title: 'برای خودم',
        onPress: this.onSubmit,
      },
    ];
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
          <CalendarCalcualtion
            additionalStyles={styles.calendarCalculator}
            numberOfSelectedDates={selectedDates.length}
            price={3000}
          />
          <IranYekan style={styles.title}>پرداخت وجه و رزرو پارکینگ:</IranYekan>
          <CoupledButtons buttons={buttons} />
        </ScrollView>

        <SuccessModal
          visible={isSuccessModalVisible}
          data={{
            tracking_code: 'wqer',
          }}
          // data={{
          //   ...paymentData,
          //   firstName,
          //   lastName,
          // }}
          onRequestClose={() => this.setState({isSuccessModalVisible: false})}
        />
        <RegistrationModal visible={true} />
      </View>
    );
  }

  submitForm = async () => {
    const {
      route: {
        params: {
          event: {event_id},
        },
      },
    } = this.props;
    const {selectedDates, firstName, lastName, phoneNumber} = this.state;
    try {
      const data = await apis.reserveVisitorParking({
        event_id,
        dates: selectedDates,
        firstName,
        lastName,
        phoneNumber,
      });
      this.setState({
        paymentData: data,
        isSuccessModalVisible: true,
      });
    } catch (e) {
      console.log('e', e);
    }
  };
}
