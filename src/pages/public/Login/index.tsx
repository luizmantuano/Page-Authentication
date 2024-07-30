import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Keyboard, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomInput from '../../../components/CustomInput';
import ButtonTwo from '../../../components/ButtonTwo';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../../firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';
import useAuthStore from '../../../store/useAuthStore';
import { styles } from './styles';

import { Checkbox } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidepass, setHidepass] = useState(true);
  const [saveCredentials, setSaveCredentials] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true); // Estado para controlar o botão de entrar

  const { setLogged } = useAuthStore();

  // Função para salvar credenciais
  const saveCredentialsAsync = async () => {
    try {
      await AsyncStorage.setItem(
        "savedCredentials",
        JSON.stringify({ email, password }),
      );
      console.log("Credenciais salvas localmente");
    } catch (error) {
      console.error("Erro ao salvar credenciais:", error);
    }
  };

  // Função para remover credenciais
  const removeCredentialsAsync = async () => {
    try {
      const savedCredentials = await AsyncStorage.getItem("savedCredentials");
      if (savedCredentials !== null) {
        await AsyncStorage.removeItem("savedCredentials");
        console.log("Credenciais removidas localmente");
        setSaveCredentials(false); // Desmarca o checkbox ao remover as credenciais
      }
    } catch (error) {
      console.error("Erro ao remover credenciais:", error);
    }
  };

   // Função para recuperar credenciais
   const getSavedCredentialsAsync = async () => {
    try {
      const savedCredentials = await AsyncStorage.getItem("savedCredentials");
      if (savedCredentials !== null) {
        const { email: savedEmail, password: savedPassword } =
          JSON.parse(savedCredentials);
        setEmail(savedEmail);
        setPassword(savedPassword);
        setSaveCredentials(true); // Marca o checkbox se houver credenciais salvas
      } else {
        setSaveCredentials(false); // Garante que o checkbox esteja desmarcado se não houver credenciais
      }
    } catch (error) {
      console.error("Erro ao recuperar credenciais:", error);
    }
  };

  useEffect(() => {
    getSavedCredentialsAsync();
  }, []);

  const errorMessages = {
    'auth/user-not-found': 'Usuário não cadastrado',
    'auth/invalid-email': 'Credenciais inválidas',
    'auth/wrong-password': 'Credenciais inválidas',
    'auth/user-disabled': 'Usuário desabilitado',
    default: 'Erro desconhecido',
  };

  const showToast = (type, message) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message + ' ❌',
      text1Style:{fontSize:16},
      text2Style:{fontSize:13}
    });
  };

  // Função para lidar com o login
  const handleSignIn = () => {
    if (password === "") {
      showToast("error", "Por favor, preencha a senha.");
      return; // Retorna sem fazer login se a senha estiver vazia
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sucesso");
        const user = userCredential.user;
        console.log(user);
        setLogged(true);

        if (saveCredentials) {
          saveCredentialsAsync();
        } else {
          removeCredentialsAsync(); // Remove apenas se houver credenciais salvas
        }
      })
      .catch((e) => {
        console.log(e);
        const errorMessage = errorMessages[e.code] || errorMessages.default;
        showToast("error", errorMessage);
      });
  };

  // Atualiza o estado do botão conforme os campos de email e senha
  useEffect(() => {
    if (email !== '' && password !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email, password]);

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
          keyboardType='email-address'
          label='E-mail'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <CustomInput
          keyboardType='default'
          label='Senha'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={hidepass}
          value={password}
          onSubmitEditing={handleSignIn}
        />

        <TouchableOpacity
          style={styles.buttonIcon}
          onPress={() => setHidepass(!hidepass)}
        >
          {hidepass ? (
            <Ionicons name='eye-off' color='black' size={22} />
          ) : (
            <Ionicons name='eye' color='black' size={22} />
          )}
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btnForget}
            onPress={() => navigation.navigate('ForgetPassword')}
          >
            <Text style={styles.Forget}>Esqueci minha senha</Text>
          </TouchableOpacity>
          {/* Checkbox para salvar credenciais */}
          <View style={styles.saveCredentialsContainer}>
          <Checkbox
            status={saveCredentials ? "checked" : "unchecked"}
            onPress={() => setSaveCredentials(!saveCredentials)}
            color="#38A69D"
          />
          <Text style={{ color: "#000000", fontSize: 12 }}>Lembrar-me</Text>
        </View>
        </View>
      </View>
      <ButtonTwo label='Entrar' disabled={buttonDisabled} onPress={handleSignIn} />

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
