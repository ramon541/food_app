import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../styles";
import { ActionButton, TextInput } from "../../components";
import { signUp as signUpService } from "../../services";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const lNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  //================================================================
  const showToast = (msg) => {
    ToastAndroid.showWithGravity(
      `${msg}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  //================================================================
  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      name.length === 0 ||
      lName.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      showToast("Preencha todos os campos!");
    } else if (!emailRegex.test(email)) {
      showToast("Email inválido!");
    } else if (password.length < 6) {
      showToast("Senha deve ter no mínimo 6 caracteres!");
    } else if (password !== confirmPassword) {
      showToast("Senhas não conferem!");
    } else {
      const IDpessoa = await signUpService({
        Fname: name,
        Lname: lName,
        email,
        password,
      });

      if (!IDpessoa) {
        showToast("Email em uso!");
      } else {
        showToast("Cadastro realizado com sucesso!");
        setName("");
        setLName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigation.navigate("Login");
      }
    }
  };
  //================================================================
  const renderTopSection = () => {
    return (
      <View style={styles.bgTop}>
        <Text style={{ color: colors.white, fontWeight: "bold", fontSize: 30 }}>
          Cadastre-se
        </Text>
        <Text style={{ color: colors.white, fontSize: 16 }}>
          Crie uma conta para usar o aplicativo
        </Text>
      </View>
    );
  };

  //================================================================
  const renderBottomSection = () => {
    return (
      <View style={styles.bgBottom}>
        <ScrollView>
          <View style={styles.formContainer}>
            <TextInput
              label="Nome"
              placeholder="Nome"
              returnKeyType="next"
              setValue={setName}
              value={name}
              onSubmit={() => lNameRef.current.focus()}
            />
            <TextInput
              ref={lNameRef}
              label="Sobrenome"
              placeholder="Sobrenome da Silva"
              returnKeyType="next"
              setValue={setLName}
              value={lName}
              onSubmit={() => emailRef.current.focus()}
            />
            <TextInput
              ref={emailRef}
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
              returnKeyType="next"
              isSecure
              setValue={setPassword}
              value={password}
              onSubmit={() => confirmPasswordRef.current.focus()}
            />
            <TextInput
              ref={confirmPasswordRef}
              label="Confirmar Senha"
              placeholder="* * * * * * * * * * *"
              isSecure
              setValue={setConfirmPassword}
              value={confirmPassword}
              onSubmit={handleSignup}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.forgotPassword}>
                Já possue uma conta? Logar
              </Text>
            </TouchableOpacity>
            <ActionButton title="Cadastrar" handleClick={handleSignup} />
          </View>
        </ScrollView>
      </View>
    );
  };

  //================================================================
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.orange} />
      </TouchableOpacity>
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
    flex: 1,
    height: "70%",
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    overflow: "hidden",

    paddingHorizontal: 24,
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
  backIcon: {
    backgroundColor: colors.white,
    position: "absolute",
    top: 24,
    left: 24,
    padding: 8,
    borderRadius: 1000,
  },
  formContainer: {
    marginVertical: 24,
    gap: 16,
  },
});
