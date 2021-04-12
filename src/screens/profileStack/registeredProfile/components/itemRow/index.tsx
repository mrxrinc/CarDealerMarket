import React from 'react';
import {TouchableOpacity} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';

type Props = {
  title: string;
  onPress: () => void;
};

export default ({title, onPress}: Props) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.mainContainer, title === 'خروج' && styles.noBorder]}>
    <IranYekan style={styles.title}>{title}</IranYekan>
  </TouchableOpacity>
);
