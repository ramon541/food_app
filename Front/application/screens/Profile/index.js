import React from "react";
import { Text, View } from "react-native";
import { ActionButton } from "../../components";
import { useStore } from "../../store";

export default function Profile() {
  const handleLogout = () => {
    console.log("Deslogando...");
    useStore.setState({ isSignedIn: false });
  };

  //================================================================
  return (
    <View>
      <Text>Profile</Text>
      <ActionButton title="Deslogar" handleClick={handleLogout} />
    </View>
  );
}
