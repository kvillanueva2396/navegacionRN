import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insest = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insest.top,
      }}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
