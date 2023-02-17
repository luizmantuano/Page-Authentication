import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Forget from '../../../assets/Forget.svg';
import CustomInput from '../../../components/CustomInput';
import ButtonTwo from '../../../components/ButtonTwo';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-circle-outline' color='white' size={25} />
      </TouchableOpacity>
      <View>
        <Text style={styles.Title}>Esqueceu sua senha ?</Text>
        <Text style={styles.Txt}>
          Não se preocupe! acontece. Insira {'\n'}o endereço associado á sua conta
        </Text>
      </View>
      <Pressable onPress={Keyboard.dismiss} style={styles.ImgForget}>
        <Forget />
      </Pressable>
      <CustomInput
        label='Insira seu Email'
        keyboardType='address-email'
        onChangeText={(text) => setEmail(text)}
      />
      <ButtonTwo label='Enviar' />
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;
