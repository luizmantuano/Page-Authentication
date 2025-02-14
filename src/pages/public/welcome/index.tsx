import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
import Button from "../../../components/Button";
import { Screens } from "../../../routes/types";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        animation="bounceIn"
        delay={600}
        style={styles.containerText}
      >
        <Text style={styles.title}>Prazer ter você aqui!</Text>
        <Text style={styles.txt}>Acesse sua conta</Text>
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        delay={600}
        style={styles.containerButton}
      >
        <Button
          label="Começar"
          onPress={() => navigation.navigate(Screens.Onboarding)}
        />
        <Button
          label="Já tenho conta"
          onPress={() => navigation.navigate(Screens.Login)}
        />
      </Animatable.View>
    </View>
  );
};

export default Welcome;
