import React, {useState} from 'react';

import IranYekan from 'components/common/IranYekan';
import styles from './styles';
import SignInFields from 'components/common/SignInFields';
import {OnSignInFieldsSubmit} from 'constants/types';

interface Props {
  onRequestClose: () => void;
  onSuccess: () => void;
  phoneNumber: string;
  visible: boolean;
}

export default ({onSignUp, onLoginSuccess}: Props) => {
  const handleSubmit: OnSignInFieldsSubmit = ({password, phoneNumber}) => {};

  return (
    <>
      <IranYekan style={styles.description}>
        کاربر گرامی، جهت خرید بلیط، باید ابتدا ثبت نام کرده و حساب کاربری داشته
        باشید!
      </IranYekan>
      <SignInFields onSubmit={handleSubmit} />
      <IranYekan fontWeight="Bold" onPress={onSignUp} style={styles.signUp}>
        ثبت نام
      </IranYekan>
    </>
  );
};
