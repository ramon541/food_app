import React, { useState } from "react";
import {
  TextInput as Input,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../../styles";

export default function InputIcon(props) {
  const { placeholder, icon, value, setValue, onSubmit, clearText } = props;

  return (
    <View style={styles.inputWithIcon}>
      <Input
        style={styles.container}
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        onSubmitEditing={onSubmit}
        returnKeyType="search"
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={clearText ? () => setValue("") : null}
      >
        <MaterialIcons
          name={clearText ? (value === "" ? icon : "close") : icon}
          size={24}
          color={colors.gray}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 42,
    color: colors.black,
    backgroundColor: colors.lighestGray,
  },
  icon: {
    position: "absolute",
    right: 16,
    padding: 6,
    zIndex: 2,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
