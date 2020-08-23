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
import RegistrationModal from 'components/registrationModal';
import ForOthersModal from 'components/common/ForOthersModal';
import ReserveCoupledButtons from 'components/common/ReserveCoupledButtons';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}

interface State {
  selectedDates: string[];
  isForOthersModalVisible: boolean;
  isSuccessModalVisible: boolean;
  isRegistrationModalVisible: boolean;
  paymentData: object;
}

export default class BuyParkingTick extends React.Component<Props, State> {
  state = {
    selectedDates: [],
    isForOthersModalVisible: false,
    isSuccessModalVisible: false,
    isRegistrationModalVisible: false,
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

  onSubmit = async () => {
    const {
      route: {
        params: {
          event: {event_id},
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
    const {isRegistrationModalVisible, isForOthersModalVisible} = this.state;
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
      </View>
    );
  }
}
