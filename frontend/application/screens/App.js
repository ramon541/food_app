import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useStore } from "../store";
import InitialRoutes from "../routes/initial.routes";
import AuthRoutes from "../routes/auth.routes";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {useStore((state) => state.isSignedIn) ? (
          <AuthRoutes />
        ) : (
          <InitialRoutes />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}
