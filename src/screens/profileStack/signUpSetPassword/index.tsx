import React from 'react';
import {ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Header from 'components/common/Header';
import styles from './styles';
import SignUpSetPasswordFields from 'components/common/SignUpSetPasswordFields';

interface Props {
  navigation: StackNavigationProp<any>;
}

export default ({navigation: {goBack, navigate}}: Props) => {
  const onSubmit = () => {};

  return (
    <ScrollView style={styles.mainContainer}>
      <Header onBackPress={goBack} hideDate title="ثبت نام" />
      <SignUpSetPasswordFields
        additionalStyles={styles.fields}
        onSubmit={onSubmit}
      />
    </ScrollView>
  );
};
