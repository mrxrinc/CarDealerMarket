import React, {useReducer} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ActionType} from 'constants/types';
import AuthInput from 'components/shared/AuthInput';
import IranYekan from 'components/shared/IranYekan';
import MainButton from 'components/shared/MainButton';
import Header from 'components/shared/Header';
import styles from './styles';
import SmsModal from 'components/shared/SmsModal';

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

const reducer = (state: State, {type, payload}: ActionType) => {
  switch (type) {
    case 'set_input':
      return {
        ...state,
        [payload.k]: payload.v,
      };
    case 'submit':
      if (state.phoneNumber && state.firstName && state.lastName) {
        return {
          ...state,
          isSmsModalVisible: true,
        };
      }
      return state;
    case 'close_sms_modal':
      return {
        ...state,
        isSmsModalVisible: false,
      };
    default:
      throw new Error('action type not found');
  }
};

export default ({navigation: {goBack, navigate}}: Props) => {
  const [
    {firstName, lastName, phoneNumber, isSmsModalVisible},
    dispatch,
  ] = useReducer(reducer, INITIAL_STATE);

  const setInput = (k: string, v: string) =>
    dispatch({type: 'set_input', payload: {k, v}});
  const onSubmit = () => dispatch({type: 'submit'});
  const onSmsVerified = () => {
    closeSmsModal();
    navigate('SignUpSetPassword');
  };
  const closeSmsModal = () => dispatch({type: 'close_sms_modal'});
  return (
    <ScrollView style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="ثبت نام" />
      <KeyboardAvoidingView style={styles.contentContainer}>
        <IranYekan fontWeight="Light" style={styles.description}>
          لطفا اطلاعات خود را بطور صحیح وارد کنید
        </IranYekan>
        <AuthInput
          title="نام"
          value={firstName}
          onChange={(v) => setInput('firstName', v)}
        />
        <AuthInput
          title="نام خانوادگی"
          value={lastName}
          onChange={(v) => setInput('lastName', v)}
        />
        <AuthInput
          placeholder="091..."
          title="شماره تماس"
          value={phoneNumber}
          onChange={(v) => setInput('phoneNumber', v)}
          keyboardType="phone-pad"
        />
        <MainButton
          title="مرحله بعد"
          onPress={onSubmit}
          style={styles.submit}
        />
      </KeyboardAvoidingView>
      <SmsModal
        onSuccess={onSmsVerified}
        visible={isSmsModalVisible}
        onRequestClose={closeSmsModal}
        phoneNumber={phoneNumber}
      />
    </ScrollView>
  );
};
