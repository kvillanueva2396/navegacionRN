import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {AuthContext} from '../context/AuthContext';
import {colores} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} type="ionicon" size={80} color={colores.primary} />
    </TouchableOpacity>
  );
};
