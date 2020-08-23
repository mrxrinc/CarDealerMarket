import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import colors from 'constants/colors';
import IranYekan from 'components/common/IranYekan';
import AuthInput from 'components/common/AuthInput';
import MainButton from 'components/common/MainButton';
import {OnSignUpFieldsSubmit} from 'constants/types';
import InstantModal from './InstantModal';

interface Props {
  onSubmit: OnSignUpFieldsSubmit;
  visible: boolean;
  onRequestClose: () => void;
}

export default ({onSubmit, onRequestClose, visible}: Props) => {
  const [firstName, setFirstName] = useState('123456');
  const [lastName, setLastName] = useState('123456');
  const [phoneNumber, setPhoneNumber] = useState('09356193235');

  const handleSubmit = () => {
    onSubmit({phoneNumber, firstName, lastName});
  };
  return (
    <InstantModal
      title="خرید برای شخص دیگر"
      visible={visible}
      onRequestClose={onRequestClose}>
      <KeyboardAvoidingView style={styles.mainContainer}>
        <IranYekan fontWeight="Light" style={styles.description}>
          لطفا اطلاعات شخص مورد نظر را وارد کنید
        </IranYekan>
        <AuthInput title="نام" value={firstName} onChange={setFirstName} />
        <AuthInput
          title="نام خانوادگی"
          value={lastName}
          onChange={setLastName}
        />
        <AuthInput
          placeholder="091..."
          title="شماره تماس"
          value={phoneNumber}
          onChange={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <MainButton
          title="مرحله بعد"
          onPress={handleSubmit}
          style={styles.submit}
        />
      </KeyboardAvoidingView>
    </InstantModal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 28,
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
