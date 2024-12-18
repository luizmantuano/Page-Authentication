import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from '../Register/styles';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import ButtonTwo from '../../../components/ButtonTwo';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../../../../firebase-config';
import Toast from 'react-native-toast-message';
import { Screens } from '../../../routes/types';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [hidepass, setHidepass] = useState(true);
  const [validadecpf, setValidadecpf] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Conta Criada com Sucesso');
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateEmail = (email) => {
    const valid = emailRegex.test(email);
    setIsValid(valid);
    setShowEmailError(!valid);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2:' CPF Inválido ❌',
    });
  };

  function validateCPF(cpf) {
    var sum;
    var rest;
    sum = 0;
    if (cpf == '00000000000') return showToast();

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return showToast();

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return showToast();
    return true;
  }

  const validation = () => {
    if (!isValid) {
      setShowEmailError(true);
      return;
    }
    if (email === '' || password === '') {
      console.log('error !!');
      return;
    }
    if (validadecpf === '') {
      console.log('complete o cpf');
    }
    if (validateCPF(validadecpf) === true) {
      setEmail('');
      setPassword('');
      handleCreateAccount();
      navigation.navigate(Screens.Login);
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-circle-outline' color='white' size={25} />
      </TouchableOpacity>

      <Animatable.View animation='fadeInDownBig' style={styles.containerText}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Text style={styles.text}>Faça parte dessa comunidade!</Text>
        <View style={styles.Line} />
      </Animatable.View>
      <Animatable.View animation='fadeInUpBig' delay={600}>
        {showEmailError && <Text style={styles.error}>Email inválido</Text>}
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          value={email}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder='Senha'
          keyboardType='numeric'
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={hidepass}
        />
        <TouchableOpacity style={styles.btnIcon} onPress={() => setHidepass(!hidepass)}>
          {hidepass ? (
            <Ionicons name='eye-off' color='black' size={22} />
          ) : (
            <Ionicons name='eye' color='black' size={22} />
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.inputMask}
          placeholder='CPF'
          keyboardType='numeric'
          onChangeText={(text) => setValidadecpf(text)}
        />
        <View style={styles.btn}>
          <ButtonTwo label='Cadastrar' onPress={() => validation()} />
        </View>
      </Animatable.View>
    </Pressable>
  );
};

export default Register;
