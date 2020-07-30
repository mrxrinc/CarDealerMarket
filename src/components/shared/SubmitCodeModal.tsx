import React from 'react';
import {View, Modal, TextInput, StyleSheet} from 'react-native';

import MainButton from './MainButton';
import IranYekan from './IranYekan';
import colors from 'constants/colors';

const NUMBERIC_REGEX = /^(\s*|\d+)$/;
type Props = {
  visible: boolean;
  countDown: number;
  numbers: string;
  onResend: () => void;
  onSubmit: () => void;
  onRequestClose: () => void;
  onChange: (v: string) => void;
};

export default ({
  visible,
  countDown,
  numbers,
  onChange,
  onResend,
  onSubmit,
  onRequestClose,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={onRequestClose}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <IranYekan style={styles.title}>
            لطفا کد ارسالی را تایید کنید
          </IranYekan>
          <View style={styles.inputsContainer}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(v) =>
                v.length <= 6 && NUMBERIC_REGEX.test(v) && onChange(v)
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
          <IranYekan onPress={onResend} style={styles.resend}>
            ارسال دوباره ({countDown})
          </IranYekan>
          <MainButton
            onPress={onSubmit}
            style={styles.button}
            title="تایید کد"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white3,
    paddingTop: 30,
    paddingBottom: 28,
    borderRadius: 2,
  },
  title: {
    fontSize: 14,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '75%',
    height: 45,
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
    width: 31,
    borderRadius: 2,
    backgroundColor: colors.grey18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
  },
  resend: {
    marginTop: 25,
    color: colors.yellow1,
  },
  button: {
    backgroundColor: colors.purple1,
    width: 140,
    height: 45,
    marginTop: 20,
    borderRadius: 10,
  },
});
