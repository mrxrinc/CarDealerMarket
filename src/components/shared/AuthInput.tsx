import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {KeyboardType} from 'constants/types';
import colors from 'constants/colors';
import IranYekan from './IranYekan';

type Props = {
  title: string;
  value?: string;
  style?: object;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
};

export default ({
  title,
  value,
  style,
  error,
  placeholder,
  onChange,
  keyboardType = 'default',
  secureTextEntry,
}: Props) => (
  <View style={[styles.mainContainer, style]}>
    <IranYekan style={[styles.title, !!error && styles.titleError]}>
      {title}
    </IranYekan>
    <TextInput
      value={value}
      onChangeText={onChange}
      style={[styles.input, !!error && styles.inputError]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
    {error && (
      <IranYekan fontWeight="Light" style={styles.error}>
        {error}
      </IranYekan>
    )}
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 40,
  },
  title: {
    fontSize: 12,
    color: colors.grey14,
    marginBottom: 5,
    backgroundColor: colors.white1,
    position: 'absolute',
    top: -15,
    right: 25,
    paddingHorizontal: 8,
    zIndex: 1000,
  },
  titleError: {
    color: colors.red1,
  },
  input: {
    height: 53,
    borderRadius: 4,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: colors.grey11,
    fontSize: 18,
    fontFamily: 'iyRegular',
  },
  inputError: {
    borderColor: colors.red1,
  },
  error: {
    color: colors.red1,
    fontSize: 12,
    position: 'absolute',
    width: '100%',
    bottom: -28,
    textAlign: 'center',
  },
});