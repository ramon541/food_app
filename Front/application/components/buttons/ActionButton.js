import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../../styles";

export default function ActionButton(props) {
  const { title, handleClick, isDisabled } = props;
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={[
          styles.container,
          { backgroundColor: isDisabled ? colors.lightGray : colors.green },
        ]}
      >
        <Text
          style={{
            color: isDisabled ? colors.gray : colors.white,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
