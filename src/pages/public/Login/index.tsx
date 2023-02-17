import { View, Text, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../Login/styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput';
import ButtonTwo from '../../../components/ButtonTwo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidepass, setHidepass] = useState(true);
  const navigation = useNavigation();

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-circle-outline' color='white' size={25} />
      </TouchableOpacity>

      <View style={styles.containerTitle}>
        <Text style={styles.Title}>Entrar</Text>
      </View>

      <View style={styles.AreaInput}>
        <CustomInput
          keyboardType='address-email'
          label='E-mail'
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          keyboardType='numeric'
          label='Senha'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidepass}
        />

        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => setHidepass(!hidepass)}
        >
          {hidepass ? (
            <Ionicons name='eye' color='black' size={22} />
          ) : (
            <Ionicons name='eye-off' color='black' size={22} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForget}
          onPress={() => navigation.navigate('ForgetPassword' as never)}
        >
          <Text style={styles.Forget}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <ButtonTwo label='Entrar' onPress={() => alert('')} />
      <Text style={styles.title}>Ainda não tem conta</Text>
      <TouchableOpacity
        style={styles.AreaTextRegister}
        onPress={() => navigation.navigate('Register' as never)}
      >
        <Text style={styles.textRegister}>Cadastre-se</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default Login;
