import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import {MONTHS_PERSIAN} from 'constants/date';
import styles from './styles';

interface CalendarHeaderProps {
  month: number;
  year: number;
}

export default ({month, year}: CalendarHeaderProps) => (
  <View style={styles.mainContainer}>
    <View style={styles.headerContainer}>
      <IranYekan fontWeight="Light">
        {MONTHS_PERSIAN[month - 1]} {year}
      </IranYekan>
    </View>
    <View style={styles.daysContainer}>
      <IranYekan style={styles.dayTitle}>ش</IranYekan>
      <IranYekan style={styles.dayTitle}>ی</IranYekan>
      <IranYekan style={styles.dayTitle}>د</IranYekan>
      <IranYekan style={styles.dayTitle}>س</IranYekan>
      <IranYekan style={styles.dayTitle}>چ</IranYekan>
      <IranYekan style={styles.dayTitle}>پ</IranYekan>
      <IranYekan style={styles.dayTitle}>ج</IranYekan>
    </View>
  </View>
);
