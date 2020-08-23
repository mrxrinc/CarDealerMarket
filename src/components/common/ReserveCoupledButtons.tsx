import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import colors from 'constants/colors';
import CoupledButtons from './CoupledButtons';
import {OnSignUpFieldsSubmit} from 'constants/types';
import ForOthersModal from './ForOthersModal';

type Props = {
  onSubmit: () => void;
  onForOthersSubmit: OnSignUpFieldsSubmit;
};

export default ({onSubmit, onForOthersSubmit}: Props) => {
  const [isForOthersModalVisible, setIsForOthersModalVisible] = useState(false);
  return (
    <>
      <CoupledButtons
        buttons={[
          {
            title: 'برای شخص دیگر',
            onPress: () => setIsForOthersModalVisible(true),
          },
          {
            title: 'برای خودم',
            onPress: onSubmit,
          },
        ]}
      />
      <ForOthersModal
        onSubmit={onForOthersSubmit}
        onRequestClose={() => setIsForOthersModalVisible(false)}
        visible={isForOthersModalVisible}
      />
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple3,
    height: 53,
    borderRadius: 14,
  },
  button: {
    flex: 0.5,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hasRightBorder: {
    borderRightWidth: 1,
    borderColor: colors.white1,
  },
  title: {
    color: colors.white1,
  },
});
