import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {StationType} from 'constants/types';
import InstantModal from 'components/common/InstantModal';
import DedicatedStation from '../dedicatedStation';
import ExpandedDedicatedStation from '../expandedDedicatedStation';
import styles from './styles';

interface Props {
  dedicatedStations: Array<StationType>;
  visible: boolean;
  onRequestClose: () => void;
  onSelect: (i: number) => void;
}

export default ({
  dedicatedStations,
  visible,
  onRequestClose,
  onSelect,
}: Props) => {
  const [selectedStation, setSelectedStation] = useState<number>(-1);
  const handleReserve = () => {
    onSelect(selectedStation);
    setSelectedStation(-1);
  };
  return (
    <InstantModal
      title="انتخاب جایگاه ویژه"
      visible={visible}
      onBackPress={
        selectedStation > -1 ? () => setSelectedStation(-1) : undefined
      }
      onRequestClose={onRequestClose}>
      <View style={styles.mainContainer}>
        <FlatList
          data={dedicatedStations}
          renderItem={({item, index}) => (
            <DedicatedStation
              station={item}
              onPress={() => setSelectedStation(index)}
            />
          )}
          keyExtractor={(item) => item.name}
        />
        <ExpandedDedicatedStation
          station={dedicatedStations[selectedStation]}
          onReserve={handleReserve}
        />
      </View>
    </InstantModal>
  );
};
