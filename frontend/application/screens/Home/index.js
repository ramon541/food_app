import React, { useState, useEffect } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { colors } from "../../styles";
import InputIcon from "../../components/inputs/InputIcon";
import RestaurantCard from "../../components/cards/RestaurantCard";
import { useStore } from "../../store";

import { getRestaurants } from "../../services";

export default function Home({ navigation }) {
  const user = useStore((state) => state.user);

  const [text, setText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  //================================================================
  useEffect(() => {
    async function fetchData() {
      const response = await getRestaurants();
      setRestaurants(response);
      console.log(response);
    }
    fetchData();
  }, []);

  //================================================================
  const handleSearch = () => {
    return restaurants.filter((val) => {
      if (text === "") return val;
      else if (
        val.nome.toLowerCase().includes(text.toLowerCase()) ||
        val.categoria.toLowerCase().includes(text.toLowerCase())
      )
        return val;
    });
  };

  //================================================================
  const handleClickRestaurant = () => {
    navigation.navigate("Restaurant");
  };

  //================================================================
  const renderItem = (item) => {
    const {
      IDrestaurante,
      imagem,
      nome,
      categoria,
      stars,
      freight,
      deliveryTime,
    } = item;

    return (
      <View style={{ marginBottom: 24 }}>
        <RestaurantCard
          id={IDrestaurante}
          image={imagem}
          name={nome}
          category={categoria}
          stars={stars.toFixed(1)}
          freight={freight}
          deliveryTime={deliveryTime}
          handleClick={handleClickRestaurant}
        />
      </View>
    );
  };

  //================================================================
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "bom dia!";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "boa tarde!";
    } else {
      return "boa noite!";
    }
  };

  //================================================================
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.container}>
        <View style={styles.containerGreeting}>
          <Text>Olá {user.Fname},</Text>
          <Text style={styles.textGreeting}>{getGreeting()}</Text>
        </View>
        <InputIcon
          placeholder="Procure por restaurantes ou categorias..."
          icon="search"
          value={text}
          setValue={setText}
          onSubmit={() => console.log("Procurando... %s", text)}
        />
        <Text style={styles.title}>Restaurantes abertos</Text>
        <FlashList
          data={handleSearch()}
          keyExtractor={(item) => item.IDrestaurante}
          estimatedItemSize={230}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    gap: 24,
  },
  containerGreeting: {
    flexDirection: "row",
    gap: 4,
  },
  textGreeting: {
    fontWeight: "bold",
  },
  title: { fontSize: 20 },
});
