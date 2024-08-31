import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { colors } from "../../styles";
import { ActionButton, TextInput } from "../../components";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  //================================================================
  const renderTopSection = () => {
    return (
      <View style={styles.bgTop}>
        <Text style={{ color: colors.white, fontWeight: "bold", fontSize: 30 }}>
          Login
        </Text>
        <Text style={{ color: colors.white, fontSize: 16 }}>
          Faça login na sua conta existente
        </Text>
      </View>
    );
  };

  //================================================================
  const renderBottomSection = () => {
    return (
      <View style={styles.bgBottom}>
        <TextInput
          label="Email"
          placeholder="exemplo@email.com"
          returnKeyType="next"
          setValue={setEmail}
          value={email}
          onSubmit={() => passwordRef.current.focus()}
        />
        <TextInput
          ref={passwordRef}
          style={{ marginTop: 16 }}
          label="Senha"
          placeholder="* * * * * * * * * * *"
          isSecure
          setValue={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <ActionButton title="Logar" />
        <View style={styles.signUpContainer}>
          <Text style={{ fontSize: 16, color: colors.gray }}>
            Não tem uma conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: colors.green }}
            >
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  //================================================================
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.darkGreen} />
      {renderTopSection()}
      {renderBottomSection()}
    </View>
  );
}

//================================================================
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.darkGreen,
  },
  bgTop: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",

    padding: 24,
  },
  bgBottom: {
    height: "70%",
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    overflow: "hidden",

    padding: 24,
    gap: 16,
  },
  forgotPassword: {
    color: colors.green,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
