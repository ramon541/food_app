import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../../styles";

export default function InitialComponent(props) {
  const { header1, header2, goBack, navigation, children } = props;

  //================================================================
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.orange} />
      {goBack && (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color={colors.orange} />
        </TouchableOpacity>
      )}
      <View style={styles.bgTop}>
        <Text
          style={{
            color: colors.white,
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          {header1}
        </Text>
        <Text
          style={{ color: colors.white, fontSize: 16, textAlign: "center" }}
        >
          {header2}
        </Text>
      </View>
      <View style={styles.bgBottom}>{children}</View>
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
  backIcon: {
    backgroundColor: colors.white,
    position: "absolute",
    top: 24,
    left: 24,
    padding: 8,
    borderRadius: 1000,
  },
});
