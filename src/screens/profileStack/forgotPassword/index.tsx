import React, {useState} from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import AuthInput from 'components/common/AuthInput';
import IranYekan from 'components/common/IranYekan';
import MainButton from 'components/common/MainButton';
import Header from 'components/common/Header';
import SmsModal from 'components/common/SmsModal';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation: {goBack, navigate}}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSmsModalVisible, setIsSmsModalVisible] = useState(false);
  const onSmsVerified = () => {
    setIsSmsModalVisible(false);
    navigate('ResetPassword');
  };
  return (
    <View style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="فرواموشی رمز عبور" />
      <View style={styles.contentContainer}>
        <IranYekan style={styles.title}>
          لطفا شماره تماس خود را وارد کنید:
        </IranYekan>
        <AuthInput
          placeholder="091..."
          title="شماره تماس"
          value={phoneNumber}
          onChange={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <MainButton
          title="ارسال کد"
          onPress={() => setIsSmsModalVisible(true)}
          style={[styles.submit, !phoneNumber && styles.submitDisabled]}
        />
      </View>
      <SmsModal
        onSuccess={onSmsVerified}
        visible={isSmsModalVisible}
        onRequestClose={() => setIsSmsModalVisible(false)}
        phoneNumber={phoneNumber}
      />
    </View>
  );
};
