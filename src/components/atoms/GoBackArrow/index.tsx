import React from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { primary } from '../../../styles/color';

interface Props {
  onPress: () => void;
}

const GoBackArrow: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 15 }}
      onPress={onPress}
    >
      <FontAwesome5 name='long-arrow-alt-left' size={24} color={primary} />
    </TouchableOpacity>
  );
}

export default GoBackArrow;