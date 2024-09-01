import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../styles";
import { ActionButton, TextInput } from "../../components";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  //================================================================
  const handleSignup = () => {};
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
          <Text style={styles.forgotPassword}>Já possue uma conta? Logar</Text>
        </TouchableOpacity>
        <ActionButton title="Cadastrar" handleClick={handleSignup} />
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
