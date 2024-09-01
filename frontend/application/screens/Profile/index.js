import React from "react";
import { Text, View } from "react-native";
import { ActionButton } from "../../components";
import { useStore } from "../../store";

export default function Profile() {
  //const user = useStore((state) => state.user);
  const handleLogout = () => {
    // console.log("Deslogando...");
    useStore.setState({ isSignedIn: false });
    // console.log("User 1:", user);
    useStore.setState({ user: {} });
    // console.log("User 2:", user);
  };

  //================================================================
  return (
    <View>
      <Text>Profile</Text>
      <ActionButton title="Deslogar" handleClick={handleLogout} />
    </View>
  );
}
