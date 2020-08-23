import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'constants/colors';
import styles from './styles';

interface Props {
  video: string;
  onPress: () => void;
}

export default ({video, onPress}: Props) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.mainContainer}>
    <Image source={{uri: video}} style={styles.video} />
    <View style={styles.playContainer}>
      <AntDesign name="play" size={28} color={colors.white1} />
    </View>
  </TouchableOpacity>
);
