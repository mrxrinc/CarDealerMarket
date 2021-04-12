import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import UserIcon from 'assets/user.svg';
import EditIcon from 'assets/edit.svg';
import IranYekan from 'components/common/IranYekan';
import ExitAlarm from 'components/common/ExitAlarm';
import colors from 'constants/colors';
import ItemRow from './components/itemRow';
import {AppContext} from 'utils/context';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation: {navigate}}: Props) => {
  const [isExitAlarmVisible, setIsExitAlarmVisible] = useState(false);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('jwt');
      navigate('MainTabs');
    } catch (e) {}
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigate('EditInformation')}
          style={styles.editButton}>
          <EditIcon />
          <IranYekan style={styles.editTitle}>ویرایش</IranYekan>
        </TouchableOpacity>
        <UserIcon
          width={130}
          height={130}
          style={styles.profielIcon}
          fill={colors.purple1}
        />
        <AppContext.Consumer>
          {({state: {user}}) => (
            <>
              <IranYekan style={styles.profileText}>
                {user.firstName}
                {user.lastName}
              </IranYekan>
              <IranYekan style={styles.profileText}>
                {user.phoneNumber}
              </IranYekan>
            </>
          )}
        </AppContext.Consumer>
      </View>
      <ItemRow title="لیست بلیط ها" onPress={() => {}} />
      <ItemRow
        title="تغییر رمز عبور"
        onPress={() => navigate('ChangePassword')}
      />
      <ItemRow title="درباره ما" onPress={() => {}} />
      <ItemRow title="خروج" onPress={() => setIsExitAlarmVisible(true)} />
      <ExitAlarm
        visible={isExitAlarmVisible}
        onExit={logout}
        onRequestClose={() => setIsExitAlarmVisible(false)}
      />
    </View>
  );
};
