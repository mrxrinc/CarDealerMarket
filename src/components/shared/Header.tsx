import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import IranYekan from 'components/shared/IranYekan';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'constants/colors';
import {TODAY} from 'constants/date';

type Props = {
  title: string;
  hideDate?: boolean;
  onBackPress?: () => void;
};

export default ({title, hideDate, onBackPress}: Props) => (
  <View style={styles.mainContainer}>
    {onBackPress && (
      <TouchableOpacity
        onPress={() => onBackPress()}
        activeOpacity={0.7}
        style={styles.backButton}>
        <AntDesign name="left" color={Colors.yellow1} size={25} />
      </TouchableOpacity>
    )}
    {!hideDate && <IranYekan style={styles.date}>{TODAY}</IranYekan>}
    <IranYekan fontWeight="Bold" style={styles.title}>
      {title}
    </IranYekan>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    height: 120,
    width: '100%',
    backgroundColor: Colors.headerBackground,
    paddingRight: 15,
    position: 'relative',
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    top: 30,
    left: 0,
  },
  date: {
    fontSize: 12,
    color: Colors.grey1,
    position: 'absolute',
    top: 45,
    right: 15,
  },
  title: {
    fontSize: 25,
    position: 'absolute',
    bottom: 4,
    right: 15,
  },
});
