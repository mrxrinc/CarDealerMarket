import React from 'react';
import {View} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import TextWithSubtitle from 'components/TextWithSubtitle';
import {numberWithCommas} from 'utils/helpers';
import styles from './styles';

interface CalculateProps {
  numberOfSelectedDates: number;
  price: number;
  additionalStyles?: object;
}

export default ({
  numberOfSelectedDates,
  price,
  additionalStyles,
}: CalculateProps) => {
  return (
    <View style={[styles.mainContainer, additionalStyles]}>
      <View style={styles.pricingHeader}>
        <IranYekan style={styles.pricingTitle}>مبلغ قابل پرداخت: </IranYekan>
      </View>
      <View style={styles.pricingContent}>
        <TextWithSubtitle subtitle="تومان" text={numberWithCommas(price)} />
        <IranYekan style={styles.pricingText}>x</IranYekan>
        <TextWithSubtitle
          additionalStyles={styles.dayStyle}
          subtitle="روز"
          text={numberOfSelectedDates}
        />
        <IranYekan style={styles.pricingText}>=</IranYekan>
        <TextWithSubtitle
          additionalStyles={styles.resultStyle}
          subtitle="تومان"
          text={numberWithCommas(price * numberOfSelectedDates)}
        />
      </View>
    </View>
  );
};
