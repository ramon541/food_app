import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../../components";
import { useStore } from "../../store";
import { colors } from "../../styles";

export default function Profile() {
  const { IDpessoa, Fname, Lname, email } = useStore((state) => state.user);
  const handleLogout = () => {
    useStore.setState({ isSignedIn: false });
    useStore.setState({ user: {} });
    useStore.setState({ restaurante: {} });
  };

  //================================================================
  return (
    <View style={styles.container}>
      <View style={{ gap: 24 }}>
        <View>
          <Text style={styles.titleInfo}>Identificador:</Text>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>{IDpessoa}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.titleInfo}>Nome:</Text>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>{`${Fname} ${Lname}`}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.titleInfo}>Email:</Text>
          <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>{email}</Text>
          </View>
        </View>
        <ActionButton title="Deslogar" handleClick={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  containerInfo: {
    marginTop: 4,
    backgroundColor: colors.lighestGray,
    padding: 8,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  titleInfo: {
    fontWeight: "bold",
  },
  textInfo: {
    color: colors.darkGray,
  },
});
