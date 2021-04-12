import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import colors from 'constants/colors';
import IranYekan from 'components/common/IranYekan';
import AuthInput from 'components/common/AuthInput';
import MainButton from 'components/common/MainButton';
import {OnSignUpFieldsSubmit} from 'constants/types';

interface Props {
  onSubmit: OnSignUpFieldsSubmit;
  additionalStyles?: object;
  submitTitle?: string;
  initialValues?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}

export default ({
  onSubmit,
  submitTitle,
  initialValues,
  additionalStyles,
}: Props) => {
  const [firstName, setFirstName] = useState(initialValues?.firstName || '');
  const [lastName, setLastName] = useState(initialValues?.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState(
    initialValues?.phoneNumber || '',
  );

  const handleSubmit = () => {
    onSubmit({phoneNumber, firstName, lastName});
  };
  return (
    <KeyboardAvoidingView style={[styles.mainContainer, additionalStyles]}>
      <IranYekan fontWeight="Light" style={styles.description}>
        لطفا اطلاعات خود را بطور صحیح وارد کنید
      </IranYekan>
      <AuthInput title="نام" value={firstName} onChange={setFirstName} />
      <AuthInput title="نام خانوادگی" value={lastName} onChange={setLastName} />
      <AuthInput
        placeholder="091..."
        title="شماره تماس"
        value={phoneNumber}
        onChange={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <MainButton
        title={submitTitle || 'مرحله بعد'}
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
