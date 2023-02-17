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
import { useNavigation } from '@react-navigation/native';
import ButtonTwo from '../../../components/ButtonTwo';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [hidepass, setHidepass] = useState(true);
  const [validadecpf, setValidadecpf] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateEmail = (email) => {
    setIsValid(emailRegex.test(email));
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    if (password.length < 6) {
      setPasswordError('A senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  function validateCPF(cpf) {
    var sum;
    var rest;
    sum = 0;
    if (cpf == '00000000000') return alert('CPF Inválido');

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return alert('CPF Inválido');

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return alert('CPF Inválido');
    return true;
  }

  const validation = () => {
    if (email === '' || password === '') {
      console.log('error !!');
      return;
    }
    if (validadecpf === '') {
      console.log('complete o cpf');
    }
    if (validateCPF(validadecpf) === true) {
      navigation.navigate('Login' as never);
      setEmail('');
      setPassword('');
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
        {!isValid && <Text style={styles.error}>Email inválido</Text>}
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
            <Ionicons name='eye' color='black' size={22} />
          ) : (
            <Ionicons name='eye-off' color='black' size={22} />
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
