import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, TextInput, ToastAndroid } from "react-native";

import { ActionButton, InitialComponent } from "../../components";
import { useStore } from "../../store";
import { sendOtp, verifyOtp } from "../../services";
import { colors } from "../../styles";

export default function CodeVerification({ navigation }) {
  const userOtp = useStore((state) => state.userOtp);

  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");

  const refCode2 = useRef();
  const refCode3 = useRef();
  const refCode4 = useRef();

  //================================================================
  useEffect(() => {
    async function fetchData() {
      await sendOtp(userOtp.email);
    }
    if (userOtp.code === 0) fetchData();
  }, []);
  //================================================================
  const handleSubmit = async () => {
    const code = `${code1}${code2}${code3}${code4}`;
    if (code.length < 4) {
      showToast("O código precisa ter 4 números!");
      //   navigation.navigate("Sign");
    } else {
      const response = await verifyOtp({ email: userOtp.email, otp: code });
      console.log("@@@@@@@ response codeverification", response.code);
      if (!response.code) {
        showToast("Código incorreto, digite novamente!");
      } else {
        useStore.setState({ isSignedIn: true });
        useStore.setState({ user: response.user });
        useStore.setState({ userOtp: response.userOtp });
      }
    }
  };

  //================================================================
  const showToast = (msg) => {
    ToastAndroid.showWithGravity(
      `${msg}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  //================================================================

  console.log(userOtp);
  return (
    <InitialComponent
      header1="Verificação"
      header2={`Enviamos um código para o seu email:\n${userOtp.email}`}
      goBack
      navigation={navigation}
    >
      <View style={styles.container}>
        <Text>Código</Text>
        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            maxLength={1}
            onChangeText={(text) => {
              setCode1(text);
              if (text) refCode2.current?.focus();
            }}
            keyboardType="numeric"
            enterKeyHint="next"
          />
          <TextInput
            ref={refCode2}
            style={styles.input}
            maxLength={1}
            onChangeText={(text) => {
              setCode2(text);
              if (text) refCode3.current?.focus();
            }}
            keyboardType="numeric"
            enterKeyHint="next"
          />
          <TextInput
            ref={refCode3}
            style={styles.input}
            maxLength={1}
            onChangeText={(text) => {
              setCode3(text);
              if (text) refCode4.current?.focus();
            }}
            keyboardType="numeric"
            enterKeyHint="next"
          />
          <TextInput
            ref={refCode4}
            style={styles.input}
            maxLength={1}
            onChangeText={(text) => {
              setCode4(text);
            }}
            keyboardType="numeric"
            enterKeyHint="send"
          />
        </View>
        <ActionButton title="Verificar" handleClick={handleSubmit} />
      </View>
    </InitialComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  containerInputs: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    width: 62,
    height: 62,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: colors.lighestGray,
  },
});
