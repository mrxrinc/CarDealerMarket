import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';

import IranYekan from 'components/common/IranYekan';
import InstantModal from 'components/common/InstantModal';
import MainButton from 'components/common/MainButton';
import apis from 'utils/apis';
import colors from 'constants/colors';
import styles from './styles';
import SignInFields from 'components/common/SignInFields';

interface Props {
  onRequestClose: () => void;
  onSuccess: () => void;
  phoneNumber: string;
  visible: boolean;
}

type Step = 'login' | 'signUp' | 'sms' | 'setPassword';

export default ({onSuccess, visible, onRequestClose}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState(5);
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<Step>('login');

  const onSignUp = () => {};

  return (
    <InstantModal
      visible={visible}
      onRequestClose={onRequestClose}
      title="ورود یا ثبت نام">
      <View style={styles.mainContainer}>
        <IranYekan style={styles.description}>
          کاربر گرامی، جهت خرید بلیط، باید ابتدا ثبت نام کرده و حساب کاربری
          داشته باشید!
        </IranYekan>
        <SignInFields />
        <IranYekan fontWeight="Bold" onPress={onSignUp} style={styles.signUp}>
          ثبت نام
        </IranYekan>
      </View>
    </InstantModal>
  );
};
