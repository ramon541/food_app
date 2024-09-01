import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

import { colors } from "../../styles";
import { ActionButton, TextInput } from "../../components";
import { useStore } from "../../store";
import { login } from "../../services";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  //================================================================
  const showToast = (msg) => {
    ToastAndroid.showWithGravity(
      `${msg}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  //================================================================
  const handleLogin = async () => {
    if (email.length === 0 || password.length === 0) {
      showToast("Preencha todos os campos!");
    } else {
      const user = await login({ email, password });
      if (user) {
        useStore.setState({ isSignedIn: true });
        useStore.setState({ user: user });
      } else {
        showToast("Email ou senha inválidos!");
      }
    }
  };

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
          label="Senha"
          placeholder="* * * * * * * * * * *"
          isSecure
          setValue={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <ActionButton title="Logar" handleClick={handleLogin} />
        <View style={styles.signUpContainer}>
          <Text style={{ fontSize: 16, color: colors.gray }}>
            Não tem conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: colors.orange }}
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
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      {renderTopSection()}
      {renderBottomSection()}
    </View>
  );
}

//================================================================
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.orange,
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
    color: colors.orange,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
