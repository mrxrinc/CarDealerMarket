import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'constants/colors';
import styles from './styles';

interface Props {
  video: string;
  onRequestClose: () => void;
}

export default ({video, onRequestClose}: Props) =>
  video ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onRequestClose}
      style={styles.mainContainer}>
      <View style={styles.videoContainer}>
        <Image source={{uri: video}} style={styles.video} />
        <EvilIcons
          name="close"
          style={styles.closeIcon}
          onPress={onRequestClose}
        />
        <AntDesign name="play" size={55} color={colors.white1} />
      </View>
    </TouchableOpacity>
  ) : null;
