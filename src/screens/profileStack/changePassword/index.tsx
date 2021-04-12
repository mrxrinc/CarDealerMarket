import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ActionType, OnSignUpFieldsSubmit} from 'constants/types';
import AuthInput from 'components/common/AuthInput';
import IranYekan from 'components/common/IranYekan';
import MainButton from 'components/common/MainButton';
import Header from 'components/common/Header';
import SmsFields from 'components/common/SmsFields';
import styles from './styles';
import SignUpFields from 'components/common/SignUpFields';
import InstantModal from 'components/common/InstantModal';
import HeaderProfile from 'components/common/HeaderProfile';

interface Props {
  navigation: StackNavigationProp<any>;
}

interface State {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isSmsModalVisible: boolean;
}

const INITIAL_STATE = {
  phoneNumber: '',
  firstName: '',
  lastName: '',
  isSmsModalVisible: false,
};

export default ({navigation: {goBack, navigate}}: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = () => {};
  return (
    <View style={styles.mainContainer}>
      <HeaderProfile onBackPress={goBack} title="تغییر رمز عبور" />
      <View style={styles.contentContainer}>
        <AuthInput
          title="رمز عبور فعلی"
          value={password}
          onChange={(v) => setPassword(v)}
          secureTextEntry
        />
        <AuthInput
          title="رمز عبور جدید"
          value={password}
          onChange={(v) => setPassword(v)}
          secureTextEntry
        />
        <AuthInput
          title="تکرار رمز عبور جدید"
          value={confirmPassword}
          onChange={(v) => setConfirmPassword(v)}
          secureTextEntry
        />
        <MainButton
          title="تغییر رمز عبور"
          onPress={submit}
          style={styles.submit}
        />
      </View>
    </View>
  );
};
