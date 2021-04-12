import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from 'constants/colors';
import {TODAY} from 'constants/date';
import colors from 'constants/colors';

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
        <AntDesign name="left" color={Colors.yellow1} size={30} />
      </TouchableOpacity>
    )}
    <IranYekan fontWeight="Bold" style={styles.title}>
      {title}
    </IranYekan>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    height: 100,
    width: '100%',
    backgroundColor: Colors.headerBackground,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    height: '100%',
    width: 70,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    fontSize: 23,
    color: colors.grey1,
  },
});
