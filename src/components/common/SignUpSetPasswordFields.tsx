import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import colors from 'constants/colors';
import IranYekan from 'components/common/IranYekan';
import AuthInput from 'components/common/AuthInput';
import MainButton from 'components/common/MainButton';
import {OnSignUpSetPasswordFieldsSubmit} from 'constants/types';

interface Props {
  onSubmit: OnSignUpSetPasswordFieldsSubmit;
  additionalStyles?: object;
}

export default ({onSubmit, additionalStyles}: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({password, confirmPassword});
  };
  return (
    <KeyboardAvoidingView style={[styles.mainContainer, additionalStyles]}>
      <IranYekan fontWeight="Light" style={styles.description}>
        لطفا رمز عبور را تعیین نمایید
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
        title="ثبت نام"
        onPress={handleSubmit}
        style={styles.submit}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  description: {
    marginTop: 20,
    marginBottom: 45,
    color: colors.purple1,
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  submit: {
    backgroundColor: colors.purple1,
    marginTop: 5,
  },
  submitDisabled: {
    backgroundColor: colors.grey8,
  },
});
