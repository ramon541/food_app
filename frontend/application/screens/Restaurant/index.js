import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { useStore } from "../../store";
import { colors } from "../../styles";
import { getCardapio } from "../../services";
import { CardapioCard } from "../../components";
import { FlashList } from "@shopify/flash-list";

export default function Restaurant({ navigation }) {
  const {
    IDrestaurante,
    imagem,
    nome,
    categoria,
    stars,
    freight,
    deliveryTime,
    telefone,
    endereco,
  } = useStore((state) => state.restaurante);

  const [cardapio, setCardapio] = useState(null);

  //================================================================
  useEffect(() => {
    async function fetchData() {
      const response = await getCardapio(IDrestaurante);
      setCardapio(response);
    }
    fetchData();
  }, []);

  //================================================================
  const renderDescription = () => {
    return (
      <View style={styles.enderecoContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Telefone:</Text>
          <Text style={styles.textEndereco}>{telefone}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>Endereço:</Text>
          <Text style={styles.textEndereco}>{endereco}</Text>
        </View>
      </View>
    );
  };

  //================================================================
  const renderItem = (item) => {
    const { imagemCardapio, nomeCardapio, ingredientes, preco } = item;
    return (
      <View key={item.IDprato} style={{ marginLeft: 24, marginRight: 12 }}>
        <CardapioCard
          imagem={imagemCardapio}
          nome={nomeCardapio}
          descricao={ingredientes}
          preco={preco}
        />
      </View>
    );
  };

  //================================================================
  return (
    <View style={styles.bg}>
      <ScrollView>
        <View style={styles.container}>
          <RestaurantCard
            id={IDrestaurante}
            image={imagem}
            name={nome}
            category={categoria}
            stars={stars.toFixed(1)}
            freight={freight}
            deliveryTime={deliveryTime}
          />
          {renderDescription()}
        </View>
        <View style={{ marginBottom: 48 }}>
          {cardapio &&
            cardapio.map((value) => (
              <>
                <Text style={styles.title}>{`${value.tipo} (${
                  Object.keys(value.items).length
                })`}</Text>
                <View
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <FlashList
                    data={value.items}
                    keyExtractor={(item) => item.IDprato.toString()}
                    estimatedItemSize={180}
                    renderItem={({ item }) => renderItem(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

//================================================================
const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    gap: 24,
  },
  title: {
    margin: 24,
    fontSize: 20,
  },
  enderecoContainer: {
    backgroundColor: colors.lighestGray,
    padding: 12,
    borderRadius: 10,
    gap: 4,
  },
  textEndereco: {
    color: colors.darkGray,
  },
});
