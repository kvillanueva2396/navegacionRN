import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {colores, styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insest = useSafeAreaInsets();

  const {authState, changeFavoriteIcon} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insest.top,
      }}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon
          name={authState.favoriteIcon}
          type="ionicon"
          size={80}
          color={colores.primary}
        />
      )}
    </View>
  );
};
