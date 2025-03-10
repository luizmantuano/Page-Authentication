import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { colors } from "../styles/colors";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  onPress?: () => void;
  label: string;
  status?: "checked" | "unchecked";
  isEmail?: boolean;
  isPassword?: boolean;
  [key: string]: any;
}

const CustomInput = ({
  onChangeText,
  keyboardType,
  label,
  onPress,
  status,
  isEmail = false,
  isPassword = false,
  ...rest
}: CustomInputProps) => {
  const [hidepass, setHidepass] = useState(true);

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.textColor}>{label}</Text>
      <View style={[localStyles.inputContainer]}>
        <TextInput
          style={localStyles.input}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={hidepass}
          placeholderTextColor="#2C2948"
          {...rest}
        />
        {isEmail && (
          <View style={localStyles.buttonCenter}>
            <Checkbox
              status={status}
              onPress={onPress}
              color={colors.primary500}
            />
          </View>
        )}

        {isPassword && (
          <TouchableOpacity
            style={localStyles.buttonCenter}
            onPress={() => setHidepass(!hidepass)}
          >
            {hidepass ? (
              <Ionicons name="eye-off" color={colors.grayScale6} size={22} />
            ) : (
              <Ionicons name="eye" color={colors.grayScale6} size={22} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 20,
  },
  buttonCenter: {
    width: "15%",
    alignItems: "center",
  },
  textColor: {
    color: colors.primary500,
    fontSize: 11,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.grayScale6,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    height: 30,
    color: "#fff",
  },
});

export default CustomInput;
