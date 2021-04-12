import React from 'react';
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
  const onSubmit: OnSignUpFieldsSubmit = (data) => {};
  return (
    <View style={styles.mainContainer}>
      <HeaderProfile onBackPress={goBack} title="ویرایش مشخصات" />
      <SignUpFields
        onSubmit={onSubmit}
        submitTitle="ثبت تغییرات"
        initialValues={{
          firstName: 'ali',
          lastName: 'hod',
          phoneNumber: '09027575765',
        }}
        additionalStyles={styles.fields}
      />
    </View>
  );
};
