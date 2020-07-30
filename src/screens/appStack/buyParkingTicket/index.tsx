import React, {useState} from 'react';
import {View} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import Header from 'components/shared/Header';
import Input from 'components/input';
import MainButton from 'components/shared/MainButton';
import SuccessModal from 'components/shared/SuccessModal';
import apis from 'utils/apis';
import {
  NavigationType,
  RouteType,
  ReservationResponseType,
} from 'constants/types';
import styles from './styles';

interface Props {
  navigation: NavigationType;
  route: RouteType;
}

export default ({
  navigation,
  route: {
    params: {price, event_id, dates},
  },
}: Props) => {
  const [form, _setForm] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
  });
  const [payment_data, _setPaymentData] = useState<ReservationResponseType>({
    tracking_code: '',
    ticket_type: '',
    marketplace: '',
  });
  const [successModalVisibility, _setSuccessModalVisibility] = useState(false);

  const _updateForm = (k: string, v: string) => {
    _setForm({...form, [k]: v});
  };
  const _submitForm = async () => {
    try {
      const data = await apis.reserveVisitorParking({
        event_id,
        dates,
        ...form,
      });
      _setPaymentData(data);
      _setSuccessModalVisibility(true);
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <View>
      <Header title="خرید بلیط پارکینگ" onBackPress={navigation.goBack} />
      <View style={styles.centerContainer}>
        <View style={styles.horizontalInputsContainer}>
          <Input
            title="نام خانوادگی"
            onChange={(v) => _updateForm('first_name', v)}
            containerStyle={styles.smallInput}
            value={form.first_name}
          />
          <Input
            title="نام"
            onChange={(v) => _updateForm('last_name', v)}
            containerStyle={styles.smallInput}
            value={form.last_name}
          />
        </View>
        <Input
          title="شماره تماس"
          onChange={(v) => _updateForm('phone_number', v)}
          value={form.phone_number}
          keyboardType="phone-pad"
          containerStyle={styles.input}
        />
        <IranYekan style={styles.priceText}>
          مبلغ قابل پرداخت :‌ {price * dates.length} تومان
        </IranYekan>
        <MainButton
          title="پرداخت وجه جهت رزرو پارکینگ"
          onPress={_submitForm}
          style={styles.submitButton}
        />
      </View>
      <SuccessModal
        visible={successModalVisibility}
        data={{
          ...payment_data,
          first_name: form.first_name,
          last_name: form.last_name,
        }}
        onRequestClose={() => _setSuccessModalVisibility(false)}
      />
    </View>
  );
};
