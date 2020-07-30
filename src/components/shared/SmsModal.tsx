import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import SmsSvg from 'assets/sms.svg';
import IranYekan from './IranYekan';
import InstantModal from './InstantModal';
import MainButton from './MainButton';
import apis from 'utils/apis';
import colors from 'constants/colors';

interface Props {
  onRequestClose: () => void;
  onSuccess: () => void;
  phoneNumber: string;
  visible: boolean;
}
const NUMBERIC_REGEX = /^(\s*|\d+)$/;

export default ({phoneNumber, onSuccess, visible, onRequestClose}: Props) => {
  const [numbers, setNumbers] = useState('');
  const [countDown, setCountDown] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  const onResend = async () => {
    if (countDown !== 0) {
      return;
    }
    try {
      const response = await apis.requestVerificationCode(phoneNumber);
      console.log('response', response);
      setCountDown(60);
    } catch (e) {
      console.log('e', e);
    }
  };
  const onSubmit = () => {
    try {
      const response = apis.verifyVerificationCode(phoneNumber, numbers);
      onSuccess();
    } catch (e) {
      console.log('e', e);
    }
  };
  return (
    <InstantModal visible={visible} onRequestClose={onRequestClose}>
      <View style={styles.mainContainer}>
        <SmsSvg style={styles.smsSvg} />
        <IranYekan style={styles.description}>
          لطفا کد ارسالی را تایید کنید
        </IranYekan>
        <View style={styles.inputsContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(v) =>
              v.length <= 6 && NUMBERIC_REGEX.test(v) && setNumbers(v)
            }
            value={numbers}
          />
          <View pointerEvents="none" style={styles.inputBlocksContainer}>
            {Array.from({length: 6}).map((_, i) => (
              <View key={i} style={styles.inputBlock}>
                <IranYekan style={styles.number}>{numbers[i]}</IranYekan>
              </View>
            ))}
          </View>
        </View>
        <IranYekan
          onPress={onResend}
          style={[styles.resend, countDown === 0 && styles.resendActive]}>
          ارسال دوباره کد {countDown > 0 && `(${countDown})`}
        </IranYekan>
        <MainButton onPress={onSubmit} style={styles.button} title="تایید کد" />
      </View>
    </InstantModal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  smsSvg: {
    marginTop: 15,
  },
  description: {
    marginTop: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '80%',
    height: 60,
  },
  input: {
    flex: 1,
    opacity: 0,
  },
  inputBlocksContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    height: '100%',
    width: 42,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 26,
  },
  resend: {
    marginTop: 40,
    color: colors.grey1,
  },
  resendActive: {
    color: colors.yellow1,
  },
  button: {
    backgroundColor: colors.purple1,
    position: 'absolute',
    width: '90%',
    bottom: 20,
  },
});
