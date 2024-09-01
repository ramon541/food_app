import React, { useState, forwardRef } from "react";
import { Text, TextInput as Input, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../../styles";

const TextInput = forwardRef((props, ref) => {
  const {
    label,
    placeholder,
    setValue,
    value,
    onSubmit,
    returnKeyType,
    isSecure,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      {label && <Text style={{ color: colors.dark }}>{label}</Text>}
      <View style={styles.inputWithIcon}>
        <Input
          ref={ref}
          style={[
            styles.container,
            { borderColor: isFocused ? colors.orange : colors.gray },
            { borderWidth: isFocused ? 2 : 1 },
          ]}
          placeholder={placeholder}
          onChangeText={setValue}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={onSubmit}
          returnKeyType={returnKeyType ? returnKeyType : "done"}
          secureTextEntry={isSecure ? true && !showPassword : false}
        />
        {isSecure && (
          <MaterialIcons
            style={{ position: "absolute", right: 16, paddingTop: 6 }}
            name={showPassword ? "visibility-off" : "visibility"}
            size={24}
            color={colors.gray}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 42,
    color: colors.black,
    marginTop: 8,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TextInput;
