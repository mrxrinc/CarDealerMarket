import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';

interface TextWithSubtitleState {
  text: string | number;
  subtitle: string;
  additionalStyles?: object;
}
export default ({text, subtitle, additionalStyles}: TextWithSubtitleState) => (
  <View style={[styles.mainContainer, additionalStyles]}>
    <IranYekan style={styles.text}>{text}</IranYekan>
    <IranYekan fontWeight="Light" style={styles.subtitle}>
      {subtitle}
    </IranYekan>
  </View>
);
