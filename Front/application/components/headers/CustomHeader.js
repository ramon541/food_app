import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../styles";

export default function CustomHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="menu" size={28} style={styles.menuIcon} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: colors.orange,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Enviando para
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.dark }}>
            Av. Leopoldinho de Oliveirinha
          </Text>
          <MaterialIcons
            style={{ color: colors.dark }}
            name="arrow-drop-down"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    // elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuIcon: {
    color: colors.dark,
    backgroundColor: colors.lighestGray,
    padding: 8,
    borderRadius: 1000,
  },
});
