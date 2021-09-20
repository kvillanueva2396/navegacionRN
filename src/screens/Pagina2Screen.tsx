import React from 'react';
// import {useNavigation} from '@react-navigation/core';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  // const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2 Screen</Text>

      <Button
        title="Ir a página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
