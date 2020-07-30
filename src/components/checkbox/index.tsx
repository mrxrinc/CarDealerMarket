import React from 'react';
import {TouchableOpacity} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'constants/colors';

type Props = {
  checked: boolean;
  containerStyle?: object;
  titleStyle?: object;
  title: string;
  onPress: () => void;
};

export default ({
  checked,
  containerStyle,
  titleStyle,
  title,
  onPress,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.5}
    style={[styles.mainContainer, containerStyle]}>
    <IranYekan style={[styles.title, titleStyle]}>{title}</IranYekan>
    <Ionicons size={35} color={Colors.grey1} name="ios-square-outline" />
    {checked && (
      <Ionicons
        style={styles.check}
        size={28}
        color={Colors.yellow1}
        name="md-checkmark"
      />
    )}
  </TouchableOpacity>
);
