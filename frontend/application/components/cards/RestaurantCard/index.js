import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../../styles";

export default function RestaurantCard(props) {
  const { id, image, name, category, stars, freight, deliveryTime } = props;
  return (
    <View key={id} style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} resizeMode="cover" />
      <View style={{ gap: 4 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.infosContainer}>
          <View style={styles.info}>
            <MaterialIcons name="star-border" size={20} color={colors.orange} />
            <Text style={styles.textStar}>{stars}</Text>
          </View>

          <View style={styles.info}>
            <MaterialIcons
              name="delivery-dining"
              size={20}
              color={colors.orange}
            />
            <Text>{freight == 0 ? "Free" : `R$ ${freight},00`}</Text>
          </View>

          <View style={styles.info}>
            <MaterialIcons name="access-time" size={20} color={colors.orange} />
            <Text>{deliveryTime} min</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 230,
    gap: 12,
  },
  img: {
    width: "100%",
    height: 135,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  category: {
    color: colors.gray,
  },
  infosContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    gap: 6,
  },
  textStar: {
    fontWeight: "bold",
  },
});
