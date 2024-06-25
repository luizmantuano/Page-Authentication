import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { styles } from '../pages/public/Login/styles';

const CustomInput = ({ label, onChangeText, keyboardType, secureTextEntry = false, ...rest }) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      style={[
        styles.input,
        {
          borderColor: focused ? '#38A69D' : '#99f6e4', // Cor da borda baseada no foco
          borderWidth: focused ? 1.5 : 1
        }
      ]}
      placeholder={label}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#2C2948'
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...rest}
    />
  );
};

export default CustomInput;
