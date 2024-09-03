import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles";

export default function CardapioCard(props) {
  const { imagem, nome, descricao, preco } = props;
  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 100 }}>
        <Image source={{ uri: imagem }} resizeMode="cover" style={styles.img} />
      </View>
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.description}>{descricao}</Text>
      <Text style={styles.price}>{`R$ ${preco.toFixed(2)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  img: {
    height: 100,
    borderRadius: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: colors.gray,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
