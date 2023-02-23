import { View, Text, TouchableOpacity, Pressable, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../Login/styles';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../../../components/CustomInput';
import ButtonTwo from '../../../components/ButtonTwo';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../../firebase-config';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidepass, setHidepass] = useState(true);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    if (email !== '' || password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Sucesso');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate('Home');
        })
        .catch((e) => {
          console.log(e);
          switch (e.code) {
            case 'auth/user-not-found':
              Alert.alert('Error', 'Usuário não cadastrado.');
              break;
            case 'auth/invalid-email':
              Alert.alert('Error', 'Email inválido.');
              break;
            case 'auth/wrong-password':
              Alert.alert('Error', 'Senha inválida.');
              break;
            case 'auth/user-disabled':
              Alert.alert('Error', 'Usuário desabilitado.');
          }
        });
    }
  };

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
          onPress={() => navigation.navigate('ForgetPassword')}
        >
          <Text style={styles.Forget}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      {email === '' || password === '' ? (
        <ButtonTwo label='Entrar' disabled={true} onPress={() => alert('')} />
      ) : (
        <ButtonTwo label='Entrar' onPress={handleSignIn} />
      )}

      <Text style={styles.title}>Ainda não tem conta</Text>
      <TouchableOpacity
        style={styles.AreaTextRegister}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.textRegister}>Cadastre-se</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default Login;
