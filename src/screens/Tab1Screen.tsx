import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View>
      <Text>
        Tab1Screen
        <Icon name="heart-outline" type="material-community" />
      </Text>
    </View>
  );
};
