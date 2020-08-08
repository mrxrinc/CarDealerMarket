import React, {useState} from 'react';
import {ScrollView, KeyboardAvoidingView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import AuthInput from 'components/shared/AuthInput';
import IranYekan from 'components/shared/IranYekan';
import MainButton from 'components/shared/MainButton';
import Header from 'components/shared/Header';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation: {goBack, navigate}}: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => navigate('SignIn', {passwordChanged: true});

  return (
    <ScrollView style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="فراموشی رمز عبور" />
      <KeyboardAvoidingView style={styles.contentContainer}>
        <IranYekan fontWeight="Light" style={styles.description}>
          لطفا رمز عبور جدید خود را وارد نمایید
        </IranYekan>
        <AuthInput
          title="رمز عبور"
          value={password}
          onChange={(v) => setPassword(v)}
          secureTextEntry
        />
        <AuthInput
          title="تکرار رمز عبور"
          value={confirmPassword}
          onChange={(v) => setConfirmPassword(v)}
          secureTextEntry
        />
        <MainButton
          title="تغییر رمز عبور"
          onPress={onSubmit}
          style={styles.submit}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
