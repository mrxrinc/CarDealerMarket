import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import Input from 'components/input';
import MainButton from 'components/shared/MainButton';
import SuccessModal from 'components/shared/SuccessModal';
import ChooseBox from './components/chooseBox';
import {
  NavigationType,
  ReservationResponseType,
  ServiceType,
} from 'constants/types';
import apis from 'utils/apis';
import {SERVICE_TYPE, PAYMENT_DATA} from 'constants/fakes';
import styles from './styles';

interface Props {
  navigation: NavigationType;
}
interface State {
  first_name: string;
  last_name: string;
  phone_number: string;
  serviceType: ServiceType;
  successModalVisibility: boolean;
  payment_data: ReservationResponseType;
  serviceTypes: Array<ServiceType>;
}
export default class Register extends React.Component<Props, State> {
  state = {
    first_name: '',
    last_name: '',
    phone_number: '',
    serviceType: SERVICE_TYPE,
    successModalVisibility: false,
    payment_data: PAYMENT_DATA,
    serviceTypes: [SERVICE_TYPE],
  };
  async componentDidMount() {
    const serviceTypes = await apis.getServiceTypes();
    this.setState({serviceTypes, serviceType: serviceTypes[0]});
  }
  _toggleSuccessModal = () =>
    this.setState({successModalVisibility: !this.state.successModalVisibility});
  _setServiceType = (v: string) => {
    const {serviceTypes} = this.state;
    this.setState({
      serviceType: serviceTypes.find((s) => s.name === v) || serviceTypes[0],
    });
  };
  _submitForm = async () => {
    try {
      const {first_name, last_name, phone_number, serviceType} = this.state;
      const data = await apis.serviceProviderReserve({
        first_name,
        last_name,
        phone_number,
        event_id: 1,
        service_id: serviceType.services[0].id,
        dates: ['1', '2'],
      });
      this.setState({payment_data: data, successModalVisibility: true});
    } catch (e) {
      console.log('e', e);
    }
  };
  render() {
    const {navigate, goBack} = this.props.navigation;
    const {
      first_name,
      last_name,
      phone_number,
      serviceType,
      successModalVisibility,
      payment_data,
      serviceTypes,
    } = this.state;
    return (
      <Header title="ثبت نام" onBackPress={goBack}>
        <View style={styles.centerContainer}>
          <View style={styles.horizontalInputsContainer}>
            <Input
              title="نام خانوادگی"
              onChange={(v) => this.setState({first_name: v})}
              containerStyle={styles.smallInput}
              value={first_name}
            />
            <Input
              title="نام"
              onChange={(v) => this.setState({last_name: v})}
              containerStyle={styles.smallInput}
              value={last_name}
            />
          </View>
          <Input
            title="شماره تماس"
            onChange={(v) => this.setState({phone_number: v})}
            value={phone_number}
            keyboardType="phone-pad"
            containerStyle={styles.input}
          />
          <Input
            title="نوع خدمت"
            onChange={this._setServiceType}
            containerStyle={styles.smallInput}
            value={serviceType.name}
            options={serviceTypes.map((s) => s.name)}
          />
          <ChooseBox
            buttonTitle="انتخاب جایگاه ویژه"
            onPress={() =>
              navigate('ChooseStation', {
                stations: serviceType.services,
              })
            }
            item={serviceType.services[0]}
          />
          <IranYekan style={styles.priceText}>
            مبلغ قابل پرداخت :‌ {serviceType.services[0].price * 2} تومان
          </IranYekan>
          <MainButton
            title="پرداخت وجه جهت رزرو جایگاه"
            onPress={this._submitForm}
            style={styles.submitButton}
          />
        </View>
        <SuccessModal
          visible={successModalVisibility}
          data={{...payment_data, first_name, last_name}}
          onRequestClose={this._toggleSuccessModal}
        />
      </Header>
    );
  }
}
