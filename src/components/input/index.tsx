import React from 'react';
import {TextInput, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {KeyboardType} from 'constants/types';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';

type Props = {
  value?: string;
  containerStyle?: object;
  titleStyle?: object;
  inputStyle?: object;
  title?: string;
  placeholder?: string;
  multiline?: boolean;
  editable?: boolean;
  onChange: (value: string) => void;
  options?: string[];
  miniDropdown?: boolean;
  keyboardType?: KeyboardType;
};

export default ({
  miniDropdown,
  multiline,
  value,
  containerStyle,
  titleStyle,
  inputStyle,
  title,
  placeholder,
  editable = true,
  onChange,
  options,
  keyboardType = 'default',
}: Props) => (
  <View style={[styles.mainContainer, containerStyle]}>
    {title && (
      <IranYekan fontWeight="Light" style={[styles.title, titleStyle]}>
        {title}
      </IranYekan>
    )}
    {options ? (
      <View
        style={[
          styles.dropdownContainer,
          miniDropdown && styles.miniDropdownContainer,
        ]}>
        <Picker
          selectedValue={value}
          style={miniDropdown && styles.miniDropdown}
          onValueChange={onChange}>
          {options.map((o) => (
            <Picker.Item key={o} label={o} value={o} />
          ))}
        </Picker>
      </View>
    ) : (
      <TextInput
        editable={editable}
        multiline={multiline}
        value={value}
        onChangeText={onChange}
        style={[multiline ? styles.multiline : styles.input, inputStyle]}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    )}
  </View>
);
