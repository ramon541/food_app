import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useBearStore } from "../store";
import InitialRoutes from "../routes/initial.routes";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        {useBearStore((state) => state.isSignedIn) ? null : <InitialRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
