import React, {useState} from 'react';
import {View} from 'react-native';

import InstantModal from 'components/common/InstantModal';
import IranYekan from 'components/common/IranYekan';
import SignInFields from 'components/common/SignInFields';
import SignUpFields from 'components/common/SignUpFields';
import SignUpSetPasswordFields from 'components/common/SignUpSetPasswordFields';
import SmsFields from 'components/common/SmsFields';
import styles from './styles';

interface Props {
  onRequestClose: () => void;
  onSuccess: () => void;
  visible: boolean;
}

type Step = 'signIn' | 'signUp' | 'smsVerify' | 'setPassword';

export default ({onSuccess, visible, onRequestClose}: Props) => {
  const [step, setStep] = useState<Step>('setPassword');

  const renderContent = () => {
    const handleSignInSubmit = () => {};
    const handleSignUpSubmit = () => {
      setStep('smsVerify');
    };
    const onSmsVerySuccess = () => {
      setStep('setPassword');
    };

    switch (step) {
      case 'signIn':
        return (
          <>
            <IranYekan style={styles.signInDescription}>
              کاربر گرامی، جهت خرید بلیط، باید ابتدا ثبت نام کرده و حساب کاربری
              داشته باشید!
            </IranYekan>
            <SignInFields onSubmit={handleSignInSubmit} />
            <IranYekan
              fontWeight="Bold"
              onPress={() => setStep('signUp')}
              style={styles.signUpButton}>
              ثبت نام
            </IranYekan>
          </>
        );
      case 'signUp':
        return <SignUpFields onSubmit={handleSignUpSubmit} />;

      case 'smsVerify':
        return (
          <SmsFields phoneNumber="462352342" onSuccess={onSmsVerySuccess} />
        );

      case 'setPassword':
        return <SignUpSetPasswordFields onSubmit={() => {}} />;
    }
  };

  return (
    <InstantModal
      visible={visible}
      onRequestClose={onRequestClose}
      title={step === 'signIn' ? 'ورود یا ثبت نام' : 'ثبت نام'}>
      <View style={styles.mainContainer}>{renderContent()}</View>
    </InstantModal>
  );
};
