import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from '../pages/public/Login/styles';

const CustomInput = ({ label, onChangeText, keyboardType, secureTextEntry = false }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        focused && {
          borderColor: '#38A69D',
          borderWidth: 1,
        },
      ]}
      placeholder={label}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#2C2948'
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

export default CustomInput;
