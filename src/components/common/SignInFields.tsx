import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import colors from 'constants/colors';
import AuthInput from 'components/common/AuthInput';
import MainButton from 'components/common/MainButton';
import {OnSignInFieldsSubmit} from 'constants/types';

interface Props {
  onSubmit: OnSignInFieldsSubmit;
}

export default ({onSubmit}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('09356193235');
  const [password, setPassword] = useState('123456');

  const handleSubmit = () => {
    onSubmit({phoneNumber, password});
  };
  return (
    <>
      <AuthInput
        placeholder="091..."
        title="شماره تماس"
        value={phoneNumber}
        onChange={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <AuthInput
        title="رمز عبور"
        secureTextEntry
        value={password}
        onChange={setPassword}
      />
      <MainButton
        title="ورود"
        onPress={handleSubmit}
        style={[
          styles.submit,
          (!phoneNumber || !password) && styles.submitDisabled,
        ]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  submit: {
    backgroundColor: colors.purple1,
    marginTop: 5,
  },
  submitDisabled: {
    backgroundColor: colors.grey8,
  },
});
