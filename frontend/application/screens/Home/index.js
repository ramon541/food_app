import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { colors } from "../../styles";
import InputIcon from "../../components/inputs/InputIcon";
import RestaurantCard from "../../components/cards/RestaurantCard";

import MOCK_IMG from "../../assets/MOCK_IMG.jpg";
import mock_restaurants from "../../store/mocks/HOME RESTAURANTS";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  //================================================================
  const handleClickRestaurant = () => {
    console.log("Clicou no restaurante");
    navigation.navigate("Restaurant");
  };

  //================================================================
  const renderItem = (item) => {
    const { id, name, category, stars, freight, deliveryTime } = item;

    return (
      <View style={{ marginBottom: 24 }}>
        <RestaurantCard
          id={id}
          image={MOCK_IMG}
          name={name}
          category={category}
          stars={stars}
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
          <Text>Olá Ramon,</Text>
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
          data={mock_restaurants}
          keyExtractor={(item) => item.id}
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
