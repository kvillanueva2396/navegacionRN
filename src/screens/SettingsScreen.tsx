import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insest = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insest.top,
      }}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};
