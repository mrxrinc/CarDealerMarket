import React, {useReducer} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ActionType} from 'constants/types';
import AuthInput from 'components/common/AuthInput';
import IranYekan from 'components/common/IranYekan';
import MainButton from 'components/common/MainButton';
import Header from 'components/common/Header';
import SmsFields from 'components/common/SmsFields';
import styles from './styles';
import SignUpFields from 'components/common/SignUpFields';
import InstantModal from 'components/common/InstantModal';

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
      }
      return {
        ...state,
        isSmsModalVisible: true,
      };
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
      <SignUpFields onSubmit={onSubmit} additionalStyles={styles.fields} />
      <InstantModal visible={isSmsModalVisible} onRequestClose={closeSmsModal}>
        <SmsFields onSuccess={onSmsVerified} phoneNumber={phoneNumber} />
      </InstantModal>
    </ScrollView>
  );
};
