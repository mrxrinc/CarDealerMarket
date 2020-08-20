import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import styles from './styles';
import {OnDatePress} from 'constants/types';

interface DayProps {
  day?: number;
  month: number;
  isDisabled: boolean;
  onDatePress: OnDatePress;
}

export default React.memo(({day, month, isDisabled, onDatePress}: DayProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handlePress = () => {
    if (isDisabled || !day) return;
    setIsSelected(!isSelected);
    onDatePress(`${month}-${day}`, !isSelected);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={styles.mainContainer}>
      <View
        style={[
          styles.titleContainer,
          isSelected && styles.titleContainerSelected,
          isDisabled && styles.titleContainerDisabled,
        ]}>
        <IranYekan
          style={[
            styles.title,
            isDisabled && styles.titleDisabled,
            isSelected && styles.titleSelected,
          ]}>
          {day}
        </IranYekan>
      </View>
    </TouchableOpacity>
  );
});
