import {
  View,
  Text,
  Pressable,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  AlertButton,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Forget from '../../../assets/Forget.svg';
import CustomInput from '../../../components/CustomInput';
import ButtonTwo from '../../../components/ButtonTwo';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Toast from 'react-native-toast-message';

interface MyComponentProps {
  navigation: any;
}

const ForgetPassword = ({ navigation }: MyComponentProps) => {
  const [email, setEmail] = useState('');

  const auth = getAuth();

  const buttons: AlertButton[] = [{ text: 'OK', onPress: () => navigation.goBack() }];

  const forgetErrorMessages = {
    'auth/user-not-found': 'Usuário não cadastrado',
    'auth/invalid-email': 'Credenciais inválidas',
    'auth/user-disabled': 'Usuário desabilitado',
    default: 'Erro desconhecido',
  };

  const showToast = (type, message) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message + ' ❌',
    });
  };

  const recover = () => {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then((r) => {
          console.log('E-mail de redefinição de senha enviado com sucesso!');
          Alert.alert(
            'E-mail de redefinição de senha enviado com sucesso!',
            undefined,
            buttons
          );
        })
        .catch((e) => {
          console.log('ForgetPassWord, recover: ' + e);
          const forgetErrorMessage = forgetErrorMessages[e.code] || forgetErrorMessages.default;
        showToast('error', forgetErrorMessage);
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2:'Por favor, Digite um email cadastrado.',
      });
    }
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
      <ButtonTwo label='Enviar' onPress={recover} />
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;
